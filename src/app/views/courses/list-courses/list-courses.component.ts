import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cilPen, cilTrash } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipDirective, RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormDirective, FormControlDirective, ButtonDirective, TableDirective, PaginationComponent, PageItemComponent, PageLinkDirective } from '@coreui/angular';
import { CourseService } from '../../common-service/course/course.service';
import Swal from 'sweetalert2';

interface CourseInterface {
  id: number;
  courseName: string;
  town: string;
  phoneNumber: string;
  website: string;
  golfLocation: string;
}

@Component({
  selector: 'app-list-courses',
  standalone: true,
  imports: [
    CommonModule, TooltipDirective, IconDirective, RouterLink,
    RowComponent, ColComponent, TextColorDirective, CardComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule,
    FormDirective, FormControlDirective, ButtonDirective,
    TableDirective,
    PaginationComponent, PageItemComponent,
    PageLinkDirective,
  ],
  templateUrl: './list-courses.component.html',
  styleUrl: './list-courses.component.scss'
})
export class ListCoursesComponent implements OnInit {
  icons = { cilPen, cilTrash };
  tooltipEditText = 'Edit';
  tooltipDeleteText = 'Delete';

  courseList: CourseInterface[] = [];
  pageRange: number[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = false;
  searchTerm: string = '';

  constructor(private courseService: CourseService) {}

  ngOnInit() {
    this.loadCourseList();
  }

  updatePageRange() {
    const totalPages = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    if (end === totalPages) {
      start = Math.max(1, totalPages - 2);
    }

    this.pageRange = Array.from({length: Math.min(3, totalPages)}, (_, i) => start + i);
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages && !this.isLoading) {
      this.currentPage = page;
      this.updatePageRange();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages && !this.isLoading) {
      this.changePage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1 && !this.isLoading) {
      this.changePage(this.currentPage - 1);
    }
  }

  async loadCourseList() {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const response = await this.courseService.listCourse('0');
      if (response.data.code === 1) {
        this.courseList = response.data.data;
        this.updatePageRange();
      } else {
        await Swal.fire('Error', 'Failed to load Course list', 'error');
      }
    } catch (error) {
      console.error('Error loading Course list:', error);
      await Swal.fire('Error', 'An error occurred while loading the Course list', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }

  get paginatedCourseList() {
    let filtered = this.courseList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.courseList.filter(course =>
        course.courseName.toLowerCase().includes(searchTermLower) ||
        course.town.toLowerCase().includes(searchTermLower) ||
        course.phoneNumber.toLowerCase().includes(searchTermLower) ||
        course.website.toLowerCase().includes(searchTermLower) ||
        course.golfLocation.toLowerCase().includes(searchTermLower)
      );
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    const filteredLength = this.searchTerm ?
      this.courseList.filter(course =>
        course.courseName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.town.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.phoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.website.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        course.golfLocation.toLowerCase().includes(this.searchTerm.toLowerCase())
      ).length :
      this.courseList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }

  async deleteCourse(id: number) {
    if (this.isLoading) return;

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      this.isLoading = true;
      try {
        const response = await this.courseService.deleteCourse(id.toString());
        if (response.data.code === 1) {
          this.courseList = this.courseList.filter(course => course.id !== id);
          await Swal.fire('Deleted!', 'Course has been deleted.', 'success');
          await this.loadCourseList();
        } else {
          await Swal.fire('Error', 'Failed to delete Course', 'error');
        }
      } catch (error) {
        console.error('Error deleting Course:', error);
        await Swal.fire('Error', 'An error occurred while deleting the Course', 'error');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
