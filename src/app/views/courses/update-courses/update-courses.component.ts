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
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from '../../common-service/course/course.service';

interface Amenity {
  id: number;
  amenityName: string;
}

@Component({
  selector: 'app-update-courses',
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
  templateUrl: './update-courses.component.html',
  styleUrls: ['./update-courses.component.scss']
})
export class UpdateCoursesComponent implements OnInit {
  golfCourseForm!: FormGroup;
  loading = false;
  submitted = false;
  amenitiesList: Amenity[] = [];
  courseId: string = '';
  selectedAmenityIds: number[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private courseService: CourseService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadAmenities();

    this.route.params.subscribe(params => {
      this.courseId = params['id'];
      if (this.courseId) {
        this.loadCourseData(this.courseId);
      }
    });
  }

  private initializeForm(): void {
    this.golfCourseForm = this.formBuilder.group({
      courseName: ['', [Validators.required]],
      courseNumber: ['', [Validators.required]],
      streetName: ['', [Validators.required]],
      locality: ['', [Validators.required]],
      town: ['', [Validators.required]],
      postcode: ['', [Validators.required, Validators.pattern('^[A-Z]{1,2}[0-9][A-Z0-9]? ?[0-9][A-Z]{2}$')]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10,12}$')]],
      website: ['', [Validators.required, Validators.pattern('^https?://.*')]],
      amenities: [[], [Validators.required]],
      golfDescription: [''],
      golfLocation: ['', [Validators.required]],
      hideStatus: [0]
    });
  }

  private async loadAmenities(): Promise<void> {
    try {
      const response = await this.courseService.getAmenities();
      this.amenitiesList = response.data || [];
    } catch (error) {
      await this.showError('Failed to load amenities');
    }
  }

  private async loadCourseData(courseId: string): Promise<void> {
    try {
      const response = await this.courseService.listCourse(courseId);
      if (response.data.code === 1 && response.data.data.length > 0) {
        const courseData = response.data.data[0];

        // Store selected amenity IDs
        this.selectedAmenityIds = courseData.amenities.map((amenityName: string) => {
          const amenity = this.amenitiesList.find(a => a.amenityName === amenityName);
          return amenity ? amenity.id : null;
        }).filter((id: number | null): id is number => id !== null);

        // Update form with course data
        this.golfCourseForm.patchValue({
          ...courseData,
          amenities: this.selectedAmenityIds
        });
      } else {
        throw new Error('Course not found');
      }
    } catch (error) {
      await this.showError('Failed to load course data');
      this.router.navigate(['/courses']);
    }
  }

  isAmenitySelected(amenityId: number): boolean {
    return this.selectedAmenityIds.includes(amenityId);
  }

  toggleAmenity(amenityId: number): void {
    const index = this.selectedAmenityIds.indexOf(amenityId);

    if (index === -1) {
      this.selectedAmenityIds.push(amenityId);
    } else {
      this.selectedAmenityIds.splice(index, 1);
    }

    this.golfCourseForm.patchValue({ amenities: this.selectedAmenityIds });
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
      const formData = {
        ...this.golfCourseForm.value,
        amenities: this.selectedAmenityIds
      };

      const response = await this.courseService.processCourse(formData, this.courseId);

      if (response.data.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: 'Golf course has been updated successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/courses']);
      } else {
        throw new Error(response.data.message || 'Unknown error occurred');
      }
    } catch (error) {
      await this.showError(error instanceof Error ? error.message : 'Failed to update golf course');
    } finally {
      this.loading = false;
    }
  }

  onCancel(): void {
    this.router.navigate(['/courses']);
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
          return 'Invalid website URL format';
        default:
          return 'Invalid format';
      }
    }
    return 'Invalid input';
  }

  private async showError(message: string): Promise<void> {
    await Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }
}
