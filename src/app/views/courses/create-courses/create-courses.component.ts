import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  RowComponent,
  ColComponent,
  TextColorDirective,
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormFloatingDirective,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  ButtonModule
} from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../common-service/course/course.service';

interface Amenity {
  id: number;
  title: string;
  tooltip: string;
  icon: string;
}

interface CourseData {
  id?: number;
  name: string;
  courseNumber?: string;
  lane: string;
  locality: string;
  town: string;
  code: string;
  country: string;
  phone: string;
  website?: string;
  timing?: string;
  imageUrl?: string;
  golfDescription?: string;
  golfHighlight?: string;
  golfLocation: string;
  amenities: number[];
}

@Component({
  selector: 'app-create-courses',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    CommonModule,
    RowComponent,
    ColComponent,
    TextColorDirective,
    CardComponent,
    FormFloatingDirective,
    CardHeaderComponent,
    CardBodyComponent,
    ReactiveFormsModule,
    FormsModule,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    ButtonDirective,
    ButtonModule
  ],
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.scss']
})
export class CreateCoursesComponent implements OnInit {
  golfCourseForm!: FormGroup;
  loading = false;
  submitted = false;
  amenitiesList: Amenity[] = [];
  selectedAmenities: number[] = [];
  imagePreview: string | null = null;
  selectedFile: File | null = null;
  isEditMode = false;
  courseId: string | null = null;
  hasExistingData = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAmenities();

    // Check if we're in edit mode
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.courseId = params['id'];
        this.isEditMode = true;
        this.loadCourseData();
      }
    });
  }

  private async loadAmenities(): Promise<void> {
    try {
      const response = await this.courseService.getAmenities();
      if (response.data && response.data.code === 1) {
        this.amenitiesList = response.data.data;
        console.log('Loaded amenities:', this.amenitiesList);
      } else {
        console.warn('Unexpected amenities response format:', response.data);
        this.amenitiesList = [];
      }
    } catch (error) {
      console.error('Error loading amenities:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to load amenities',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  private async loadCourseData(): Promise<void> {
    if (!this.courseId) return;

    try {
      this.loading = true;
      const response = await this.courseService.listCourse(this.courseId);

      if (response.data && response.data.code === 1 && response.data.data.length > 0) {
        const courseData: CourseData = response.data.data[0];
        this.hasExistingData = true;

        // Map the response data to form fields
        this.golfCourseForm.patchValue({
          courseName: courseData.name || '',
          courseNumber: courseData.courseNumber || '',
          streetName: courseData.lane || '',
          locality: courseData.locality || '',
          town: courseData.town || '',
          postcode: courseData.code || '',
          country: courseData.country || '',
          phoneNumber: courseData.phone || '',
          website: courseData.website || '',
          timing: courseData.timing || '',
          golfDescription: courseData.golfDescription || '',
          golfHighlight: courseData.golfHighlight || '',
          golfLocation: courseData.golfLocation || ''
        });

        // Set selected amenities
        this.selectedAmenities = courseData.amenities || [];
        this.golfCourseForm.patchValue({ amenities: this.selectedAmenities });

        // Set image preview if exists
        if (courseData.imageUrl && !courseData.imageUrl.includes('default-course.jpg')) {
          this.imagePreview = courseData.imageUrl;
        }
      }
    } catch (error) {
      console.error('Error loading course data:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to load course data',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  private initializeForm(): void {
    this.golfCourseForm = this.formBuilder.group({
      courseName: ['', [Validators.required, Validators.minLength(2)]],
      courseNumber: [''],
      streetName: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      town: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[\+]?[\d\s\-\(\)]+$/)]],
      website: ['', [Validators.pattern(/^https?:\/\/.+/)]],
      timing: [''],
      amenities: [[], [Validators.required, Validators.minLength(1)]],
      golfDescription: [''],
      golfHighlight: [''],
      golfLocation: ['', [Validators.required]],
      courseImage: [null],
      hideStatus: [0]
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];

      // Validate file type
      if (!file.type.startsWith('image/')) {
        Swal.fire({
          title: 'Error!',
          text: 'Please select an image file',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        return;
      }

      // Validate file size (max 5MB)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        Swal.fire({
          title: 'Error!',
          text: 'Image size should not exceed 5MB',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        return;
      }

      this.selectedFile = file;

      // Create preview
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }

  isAmenitySelected(amenityId: number): boolean {
    return this.selectedAmenities.includes(amenityId);
  }

  toggleAmenity(amenity: Amenity): void {
    const index = this.selectedAmenities.indexOf(amenity.id);

    if (index === -1) {
      this.selectedAmenities.push(amenity.id);
    } else {
      this.selectedAmenities.splice(index, 1);
    }

    this.golfCourseForm.patchValue({ amenities: this.selectedAmenities });
    this.golfCourseForm.get('amenities')?.markAsTouched();
  }

  // Helper method to get amenity title by ID
  getAmenityTitle(amenityId: number): string {
    const amenity = this.amenitiesList.find(a => a.id === amenityId);
    return amenity ? amenity.title : `Amenity ${amenityId}`;
  }

  get f() {
    return this.golfCourseForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.golfCourseForm.invalid) {
      // Mark all fields as touched to show validation errors
      Object.keys(this.golfCourseForm.controls).forEach(key => {
        const control = this.golfCourseForm.get(key);
        control?.markAsTouched();
      });

      // Scroll to first error
      const firstErrorElement = document.querySelector('.is-invalid');
      if (firstErrorElement) {
        firstErrorElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }

    try {
      this.loading = true;

      // Create FormData object to handle file upload
      const formData = new FormData();

      // Add all form fields to FormData (excluding courseImage and amenities)
      Object.keys(this.golfCourseForm.value).forEach(key => {
        if (key !== 'courseImage' && key !== 'amenities') {
          const value = this.golfCourseForm.value[key];
          if (value !== null && value !== undefined && value !== '') {
            formData.append(key, value);
          }
        }
      });

      // Add amenities as JSON string (as expected by backend)
      formData.append('amenities', JSON.stringify(this.selectedAmenities));

      // Add the file if selected
      if (this.selectedFile) {
        formData.append('courseImage', this.selectedFile);
      }

      // Determine the ID for the request (0 for create, actual ID for update)
      const requestId = this.isEditMode && this.courseId ? this.courseId : '0';

      const response = await this.courseService.processCourse(formData, requestId);

      if (response.data && response.data.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: this.isEditMode
            ? 'Golf course has been updated successfully'
            : 'Golf course has been created successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/courses']);
      } else {
        throw new Error(response.data?.message || 'Unknown error occurred');
      }
    } catch (error: any) {
      console.error('Error submitting form:', error);

      let errorMessage = 'Failed to save golf course';
      if (error.response?.data?.message) {
        errorMessage = error.response.data.message;
      } else if (error.response?.data?.errors) {
        const errors = error.response.data.errors;
        errorMessage = Object.keys(errors).map(key => `${key}: ${errors[key].join(', ')}`).join('\n');
      } else if (error.message) {
        errorMessage = error.message;
      }

      await Swal.fire({
        title: 'Error!',
        text: errorMessage,
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  async onDelete(): Promise<void> {
    if (!this.courseId || !this.hasExistingData) return;

    const result = await Swal.fire({
      title: 'Are you sure?',
      text: 'This action cannot be undone!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    });

    if (result.isConfirmed) {
      try {
        this.loading = true;
        const response = await this.courseService.deleteCourse(this.courseId);

        if (response.data && response.data.code === 1) {
          await Swal.fire({
            title: 'Deleted!',
            text: 'Golf course has been deleted successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          });
          this.router.navigate(['/courses']);
        } else {
          throw new Error(response.data?.message || 'Failed to delete course');
        }
      } catch (error: any) {
        console.error('Error deleting course:', error);
        await Swal.fire({
          title: 'Error!',
          text: 'Failed to delete golf course',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
      } finally {
        this.loading = false;
      }
    }
  }

  onReset(): void {
    this.submitted = false;
    this.selectedAmenities = [];
    this.imagePreview = null;
    this.selectedFile = null;
    this.golfCourseForm.reset({
      hideStatus: 0,
      amenities: []
    });

    // If in edit mode, reload the data
    if (this.isEditMode) {
      this.loadCourseData();
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.golfCourseForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.golfCourseForm.get(fieldName);
    if (!control || !control.errors) return '';

    const errors = control.errors;

    if (errors['required']) {
      switch (fieldName) {
        case 'amenities':
          return 'Please select at least one amenity';
        default:
          return 'This field is required';
      }
    }

    if (errors['minlength']) {
      if (fieldName === 'amenities') {
        return 'Please select at least one amenity';
      }
      return `Minimum length is ${errors['minlength'].requiredLength} characters`;
    }

    if (errors['pattern']) {
      switch (fieldName) {
        case 'phoneNumber':
          return 'Invalid phone number format';
        case 'website':
          return 'Invalid website URL format (must start with http:// or https://)';
        default:
          return 'Invalid format';
      }
    }

    return 'Invalid input';
  }
}
