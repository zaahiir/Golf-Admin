import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle, CommonModule, DatePipe } from '@angular/common';
import { cilTrash } from '@coreui/icons';
import { IconDirective } from '@coreui/icons-angular';
import { FormsModule } from '@angular/forms';
import {
  TooltipDirective,
  RowComponent,
  ColComponent,
  CardComponent,
  CardBodyComponent,
  FormControlDirective,
  ButtonDirective,
  TableDirective,
  PaginationComponent,
  PageItemComponent,
  PageLinkDirective,
  SpinnerComponent
} from '@coreui/angular';
import { EnquiryService } from '../../common-service/enquiry/enquiry.service';
import Swal from 'sweetalert2';

interface EnquiryInterface {
  id: number;
  contactEnquiryFirstName: string;
  contactEnquiryLastName: string;
  contactEnquiryPhoneNumber: string;
  contactEnquiryEmail: string;
  contactEnquiryMessage: string;
  contactEnquiryDate: string;
}

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [
    NgClass,
    CommonModule,
    DatePipe,
    TooltipDirective,
    IconDirective,
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
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.scss'
})
export class EnquiryComponent implements OnInit {
  icons = { cilTrash };
  tooltipDeleteText = 'Delete';

  enquiryList: EnquiryInterface[] = [];
  pageRange: number[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  isLoading = false;
  searchTerm: string = '';

  constructor(private enquiryService: EnquiryService) {}

  ngOnInit() {
    this.loadEnquiryList();
  }

  async loadEnquiryList() {
    if (this.isLoading) return;

    this.isLoading = true;
    try {
      const response = await this.enquiryService.listEnquiry('0');
      if (response.data.code === 1) {
        this.enquiryList = response.data.data;
        this.updatePageRange();
      } else {
        await Swal.fire('Error', 'Failed to load enquiry list', 'error');
      }
    } catch (error) {
      console.error('Error loading enquiry list:', error);
      await Swal.fire('Error', 'An error occurred while loading the enquiry list', 'error');
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

  get paginatedEnquiryList() {
    let filtered = this.enquiryList;
    if (this.searchTerm) {
      const searchTermLower = this.searchTerm.toLowerCase();
      filtered = this.enquiryList.filter(enquiry =>
        enquiry.contactEnquiryFirstName.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryLastName.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryEmail.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(searchTermLower) ||
        enquiry.contactEnquiryMessage.toLowerCase().includes(searchTermLower)
      );
    }
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return filtered.slice(startIndex, startIndex + this.itemsPerPage);
  }

  get totalPages() {
    const filteredLength = this.searchTerm
      ? this.enquiryList.filter(enquiry =>
          enquiry.contactEnquiryFirstName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryLastName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryEmail.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryPhoneNumber.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          enquiry.contactEnquiryMessage.toLowerCase().includes(this.searchTerm.toLowerCase())
        ).length
      : this.enquiryList.length;
    return Math.ceil(filteredLength / this.itemsPerPage);
  }

  async deleteEnquiry(id: number) {
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
        const response = await this.enquiryService.deleteEnquiry(id.toString());
        if (response.data.code === 1) {
          await Swal.fire('Deleted!', 'Enquiry has been deleted.', 'success');
          await this.loadEnquiryList();
        } else {
          await Swal.fire('Error', 'Failed to delete enquiry', 'error');
        }
      } catch (error) {
        console.error('Error deleting enquiry:', error);
        await Swal.fire('Error', 'An error occurred while deleting the enquiry', 'error');
      } finally {
        this.isLoading = false;
      }
    }
  }
}
