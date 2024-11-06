import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-courses',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgClass, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    InputGroupComponent, InputGroupTextDirective, FormSelectDirective,
    ButtonDirective
  ],
  templateUrl: './update-courses.component.html',
  styleUrl: './update-courses.component.scss'
})
export class UpdateCoursesComponent  implements OnInit {
  golfCourseForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.golfCourseForm = this.formBuilder.group({
      courseName: ['', [Validators.required, Validators.minLength(2)]],
      courseAddress: ['', [Validators.required, Validators.minLength(5)]],
      courseCity: ['', [Validators.required, Validators.minLength(2)]],
      courseState: ['', [Validators.required, Validators.minLength(2)]],
      courseZipCode: ['', [Validators.required, Validators.pattern('^[0-9]{5}(?:-[0-9]{4})?$')]],
      courseCountry: ['', [Validators.required, Validators.minLength(2)]],
      coursePar: ['', [Validators.required, Validators.min(0)]],
      courseYardage: ['', [Validators.required, Validators.min(0)]],
      courseRating: ['', [Validators.required, Validators.min(0), Validators.max(155)]],
      courseSlopeRating: ['', [Validators.required, Validators.min(0), Validators.max(155)]],
      courseClubhouse: ['', [Validators.required, Validators.minLength(2)]],
      coursePracticeRange: ['', [Validators.required, Validators.minLength(2)]],
      courseProShop: ['', [Validators.required, Validators.minLength(2)]],
      courseRestaurant: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  get f() { 
    return this.golfCourseForm.controls; 
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.golfCourseForm.invalid) {
      return;
    }

    try {
      this.loading = true;

      // Add your API call here to save the golf course data
      // const response = await this.golfCourseService.createGolfCourse(this.golfCourseForm.value);
      
      await Swal.fire({
        title: 'Success!',
        text: 'Golf course has been created successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      this.router.navigate(['/golf-courses']);
    } catch (error) {
      console.error('Error creating golf course:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to create golf course',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.golfCourseForm.reset();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.golfCourseForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.golfCourseForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    if (control.errors['pattern']) return 'Invalid format';
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
    if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}`;

    return 'Invalid input';
  }
}
