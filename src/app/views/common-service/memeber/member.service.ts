import { Injectable } from '@angular/core';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private apiUrl: string;
  private lists: string;
  private processing: string;
  private deletion: string;
  private gender: string;
  private nationality: string;
  private paymentStatus: string;
  private paymentMethod: string;

  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "member/0/listing/";
    this.processing = this.apiUrl + "member/0/processing/";
    this.deletion = this.apiUrl + "member/0/deletion/";
    this.gender = this.apiUrl + "gender/";
    this.nationality = this.apiUrl + "country/";
    this.paymentStatus = this.apiUrl + "paymentMethod/";
    this.paymentMethod = this.apiUrl + "paymentStatus/";
  }

  listPlan(id: string = '0') {
    return axios.get(this.lists.replace('0', id));
  }

  processPlan(data: any, id: string = '0') {
    return axios.post(this.processing.replace('0', id), data);
  }

  deletePlan(id: string) {
    return axios.get(this.deletion.replace('0', id));
  }

  getGender() {
    return axios.get(this.gender);
  }

  getNationality() {
    return axios.get(this.nationality);
  }

  getPaymentStatus() {
    return axios.get(this.paymentStatus);
  }

  getPaymentMethod() {
    return axios.get(this.paymentMethod);
  }
}
