import { Component, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { cilPen, cilTrash } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import {
  TooltipDirective,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  ButtonDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective,
  SpinnerComponent
} from '@coreui/angular';
import { MemberEnquiryService } from '../../common-service/memberEnquiry/member-enquiry.service';
import Swal from 'sweetalert2';

interface MemberEnquiryInterface {
  id: number;
  memberEnquiryDate: string;
  memberEnquiryPlan: string;
  memberEnquiryFirstName: string;
  memberEnquiryLastName: string;
  memberEnquiryPhoneNumber: string;
  memberEnquiryEmail: string;
  memberEnquiryTown: string;
}

@Component({
  selector: 'app-member-enquiry',
  standalone: true,
  imports: [
    CommonModule,
    DatePipe,
    TooltipDirective,
    IconDirective,
    RouterLink,
    RowComponent,
    ColComponent,
    CardComponent,
    CardBodyComponent,
    FormsModule,
    ButtonDirective,
    TableDirective,
    PaginationComponent,
    PageItemComponent,
    PageLinkDirective,
    SpinnerComponent
  ],
  templateUrl: './member-enquiry.component.html',
  styleUrl: './member-enquiry.component.scss'
})
export class MemberEnquiryComponent implements OnInit {
  icons = { cilPen, cilTrash };
  tooltipEditText = 'Edit';
  tooltipDeleteText = 'Delete';

  memberEnquiryList: MemberEnquiryInterface[] = [];
  pageRange: number[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = false;
  searchTerm: string = '';

  constructor(private memberEnquiryService: MemberEnquiryService) {}

  ngOnInit() {
    this.loadMemberEnquiryList();
  }

  async loadMemberEnquiryList() {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const response = await this.memberEnquiryService.listMemberEnquiry('0');
      if (response.data.code === 1) {
        this.memberEnquiryList = response.data.data;
        this.updatePageRange();
      } else {
        await Swal.fire('Error', 'Failed to load member enquiry list', 'error');
      }
    } catch (error) {
      console.error('Error loading member enquiry list:', error);
      await Swal.fire('Error', 'An error occurred while loading the list', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  updatePageRange() {
    const totalPages = this.totalPages;
    let start = Math.max(1, this.currentPage - 1);
    let end = Math.min(totalPages, start + 2);

    if (end === totalPages) {
      start = Math.max(1, totalPages - 2);
    }

    this.pageRange = Array.from({ length: Math.min(3, totalPages) }, (_, i) => start + i);
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

  search() {
    this.currentPage = 1;
    this.updatePageRange();
  }

  get paginatedMemberEnquiryList() {
    let filtered = this.memberEnquiryList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.memberEnquiryList.filter(enquiry =>
        enquiry.memberEnquiryPlan.toLowerCase().includes(searchTermLower) ||
        `${enquiry.memberEnquiryFirstName} ${enquiry.memberEnquiryLastName}`.toLowerCase().includes(searchTermLower) ||
        enquiry.memberEnquiryPhoneNumber.toLowerCase().includes(searchTermLower) ||
        enquiry.memberEnquiryEmail.toLowerCase().includes(searchTermLower) ||
        enquiry.memberEnquiryTown.toLowerCase().includes(searchTermLower)
      );
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    const filteredLength = this.searchTerm
      ? this.memberEnquiryList.filter(enquiry =>
          enquiry.memberEnquiryPlan.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          `${enquiry.memberEnquiryFirstName} ${enquiry.memberEnquiryLastName}`.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.memberEnquiryPhoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.memberEnquiryEmail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.memberEnquiryTown.toLowerCase().includes(this.searchTerm.toLowerCase())
        ).length
      : this.memberEnquiryList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }

  async deleteMemberEnquiry(id: number) {
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
        const response = await this.memberEnquiryService.deleteMemberEnquiry(id.toString());
        if (response.data.code === 1) {
          await Swal.fire('Deleted!', 'Member enquiry has been deleted.', 'success');
          await this.loadMemberEnquiryList();
        } else {
          await Swal.fire('Error', 'Failed to delete member enquiry', 'error');
        }
      } catch (error) {
        console.error('Error deleting member enquiry:', error);
        await Swal.fire('Error', 'An error occurred while deleting the member enquiry', 'error');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
