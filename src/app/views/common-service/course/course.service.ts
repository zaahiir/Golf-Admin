import { Injectable } from '@angular/core';
import { BaseAPIUrl, baseURLType } from '../commom-api-url';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl: string;

  constructor() {
    this.apiUrl = new BaseAPIUrl().getUrl(baseURLType);
  }

  // Get course list or single course
  listCourse(id: string = '0') {
    return axios.get(`${this.apiUrl}course/${id}/listing/`);
  }

  // Create or update course
  processCourse(data: any, id: string = '0') {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    };
    return axios.post(`${this.apiUrl}course/${id}/processing/`, data, config);
  }

  // Delete course (soft delete)
  deleteCourse(id: string) {
    return axios.get(`${this.apiUrl}course/${id}/deletion/`);
  }

  // Get amenities using the list_all custom action
  getAmenities() {
    return axios.get(`${this.apiUrl}amenities/list_all/`);
  }

  // Get courses formatted for collection component
  getCollectionData() {
    return axios.get(`${this.apiUrl}course/collection_data/`);
  }

  // Search courses
  searchCourses(params: {
    q?: string;
    location?: string;
    amenities?: number[]
  }) {
    const queryParams = new URLSearchParams();

    if (params.q) queryParams.append('q', params.q);
    if (params.location) queryParams.append('location', params.location);
    if (params.amenities && params.amenities.length > 0) {
      params.amenities.forEach(id => queryParams.append('amenities[]', id.toString()));
    }

    return axios.get(`${this.apiUrl}course/search/?${queryParams.toString()}`);
  }

  // Get single course by ID (alternative method)
  getCourse(id: string) {
    return this.listCourse(id);
  }

  // Get all courses
  getAllCourses() {
    return this.listCourse('0');
  }
}
