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
  FormControlDirective
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
    FormControlDirective,
    ButtonDirective,
    TableDirective,
    PaginationComponent,
    PageItemComponent,
    PageLinkDirective,
  ],
  templateUrl: './member-enquiry.component.html',
  styleUrl: './member-enquiry.component.scss'
})
export class MemberEnquiryComponent implements OnInit {
  icons = { cilPen, cilTrash };
  tooltipEditText = 'Edit';
  tooltipDeleteText = 'Delete';

  memberEnquiryList: MemberEnquiryInterface[] = [];
  filteredList: MemberEnquiryInterface[] = [];
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
        this.filterList();
        this.updatePageRange();
      } else {
        await Swal.fire('Error', 'Failed to load member enquiry list', 'error');
      }
    } catch (error) {
      await Swal.fire('Error', 'An error occurred while loading the list', 'error');
    } finally {
      this.isLoading = false;
    }
  }

  filterList() {
    if (!this.searchTerm) {
      this.filteredList = [...this.memberEnquiryList];
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase().trim();
    this.filteredList = this.memberEnquiryList.filter(enquiry => {
      const fullName = `${enquiry.memberEnquiryFirstName || ''} ${enquiry.memberEnquiryLastName || ''}`.toLowerCase();
      const searchableFields = [
        (enquiry.memberEnquiryPlan || '').toLowerCase(),
        fullName,
        (enquiry.memberEnquiryPhoneNumber || '').toLowerCase(),
        (enquiry.memberEnquiryEmail || '').toLowerCase(),
        (enquiry.memberEnquiryTown || '').toLowerCase()
      ];

      return searchableFields.some(field => field.includes(searchTermLower));
    });
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

  get paginatedMemberEnquiryList() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredList.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    return Math.ceil(this.filteredList.length / this.itemsPerPage);
  }

  search() {
    this.filterList();
    this.currentPage = 1;
    this.updatePageRange();
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
        await Swal.fire('Error', 'An error occurred while deleting the member enquiry', 'error');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
