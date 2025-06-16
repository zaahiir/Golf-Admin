import { Injectable } from '@angular/core';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class MemberEnquiryService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
  }

  listMemberEnquiry(id: string = '0') {
    // Fixed URL structure to match Django endpoint
    const url = `${this.apiUrl}memberEnquiry/listing/${id}/`;
    return axios.get(url);
  }

  processMemberEnquiry(data: any, id: string = '0') {
    // Fixed URL structure to match Django endpoint
    const url = `${this.apiUrl}memberEnquiry/processing/${id}/`;
    return axios.post(url, data);
  }

  deleteMemberEnquiry(id: string) {
    // Fixed URL structure to match Django endpoint
    const url = `${this.apiUrl}memberEnquiry/deletion/${id}/`;
    return axios.get(url);
  }
}
