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
  ButtonDirective
} from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { CourseService } from '../../common-service/course/course.service';

interface Amenity {
  id: number;
  amenityName: string;
}

@Component({
  selector: 'app-create-courses',
  standalone: true,
  imports: [
    NgIf,
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
    ButtonDirective
  ],
  templateUrl: './create-courses.component.html',
  styleUrls: ['./create-courses.component.scss']
})
export class CreateCoursesComponent implements OnInit {
  golfCourseForm!: FormGroup;
  loading = false;
  submitted = false;
  amenitiesList: Amenity[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAmenities();
  }

  private async loadAmenities(): Promise<void> {
    try {
      const response = await this.courseService.getAmenities();
      this.amenitiesList = response.data || [];
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to load amenities',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  private initializeForm(): void {
    this.golfCourseForm = this.formBuilder.group({
      courseName: ['', [Validators.required]],
      courseNumber: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      town: ['', [Validators.required]],
      postcode: ['', [Validators.required]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      website: ['', [Validators.required]],
      amenities: [[], [Validators.required]],
      golfDescription: [''],
      golfLocation: ['', [Validators.required]],
      hideStatus: [0]
    });
  }

  isAmenitySelected(amenity: string): boolean {
    const selectedAmenities = this.golfCourseForm.get('amenities')?.value || [];
    return selectedAmenities.includes(amenity);
  }

  toggleAmenity(amenity: string): void {
    const selectedAmenities = [...(this.golfCourseForm.get('amenities')?.value || [])];
    const index = selectedAmenities.indexOf(amenity);

    if (index === -1) {
      selectedAmenities.push(amenity);
    } else {
      selectedAmenities.splice(index, 1);
    }

    this.golfCourseForm.patchValue({ amenities: selectedAmenities });
    this.golfCourseForm.get('amenities')?.markAsTouched();
  }

  get f() {
    return this.golfCourseForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.golfCourseForm.invalid) {
      Object.keys(this.golfCourseForm.controls).forEach(key => {
        const control = this.golfCourseForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    try {
      this.loading = true;
      const selectedAmenityNames = this.golfCourseForm.get('amenities')?.value || [];
      const selectedAmenityIds = this.amenitiesList
        .filter(a => selectedAmenityNames.includes(a.amenityName))
        .map(a => a.id);

      const formData = {
        ...this.golfCourseForm.value,
        amenities: selectedAmenityIds[0]
      };

      const response = await this.courseService.processCourse(formData);

      if (response.data.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: 'Golf course has been created successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/courses']);
      } else {
        throw new Error(response.data.message || 'Unknown error occurred');
      }
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'Failed to create golf course',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.golfCourseForm.reset({
      hideStatus: 0,
      amenities: []
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.golfCourseForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.golfCourseForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['minlength']) {
      if (fieldName === 'amenities') {
        return 'Please select at least one amenity';
      }
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    }
    if (control.errors['pattern']) {
      switch (fieldName) {
        case 'postcode':
          return 'Invalid postcode format';
        case 'phoneNumber':
          return 'Invalid phone number format';
        case 'website':
          return 'Invalid website URL';
        default:
          return 'Invalid format';
      }
    }
    return 'Invalid input';
  }
}
