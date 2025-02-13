import { Injectable } from '@angular/core';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class ConceptService {
  private apiUrl: string;
  private lists: string;
  private processing: string;

  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
    this.lists = this.apiUrl + "concept/0/listing/";
    this.processing = this.apiUrl + "concept/0/processing/";
  }

  listConcept(id: string = '0') {
    return axios.get(this.lists.replace('0', id));
  }

  processConcept(data: any, id: string = '0') {
    return axios.post(this.processing.replace('0', id), data);
  }
}
