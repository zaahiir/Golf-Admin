import { Injectable } from '@angular/core';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class EnquiryService {
  private apiUrl: string;
  private lists: string;
  private processing: string;
  private deletion: string;
  private updateStatus: string;  // New endpoint

  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "contactEnquiry/0/listing/";
    this.processing = this.apiUrl + "contactEnquiry/0/processing/";
    this.deletion = this.apiUrl + "contactEnquiry/0/deletion/";
    this.updateStatus = this.apiUrl + "contactEnquiry/0/update_status/";  // New endpoint
  }

  listEnquiry(id: string = '0') {
    return axios.get(this.lists.replace('0', id));
  }

  processEnquiry(data: any, id: string = '0') {
    return axios.post(this.processing.replace('0', id), data);
  }

  deleteEnquiry(id: string) {
    return axios.get(this.deletion.replace('0', id));
  }

  // New method to update status
  updateEnquiryStatus(id: string, status: string) {
    return axios.post(this.updateStatus.replace('0', id), { status: status });
  }
}
