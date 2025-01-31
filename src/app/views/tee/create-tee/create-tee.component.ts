import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  ButtonDirective,
  CardBodyComponent,
  CardComponent,
  CardHeaderComponent,
  ColComponent,
  FormControlDirective,
  FormDirective,
  FormFeedbackComponent,
  FormFloatingDirective,
  FormLabelDirective,
  InputGroupComponent,
  InputGroupTextDirective,
  FormSelectDirective,
  RowComponent,
  TextColorDirective
} from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tee',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    NgClass,
    NgForOf,
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
    InputGroupComponent,
    InputGroupTextDirective,
    FormSelectDirective,
    ButtonDirective
  ],
  templateUrl: './create-tee.component.html',
  styleUrl: './create-tee.component.scss'
})
export class CreateTeeComponent implements OnInit {
  teeForm!: FormGroup;
  loading = false;
  submitted = false;

  amenities: string[] = [
    'Golf Cart',
    'Driving Range',
    'Pro Shop',
    'Restaurant',
    'Putting Green',
    'Locker Room',
    'Club Rental',
    'Lessons Available',
    'Practice Bunker',
    'Golf Academy'
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.teeForm = this.formBuilder.group({
      teeName: ['', [Validators.required, Validators.minLength(2)]],
      teeColor: ['', [Validators.required, Validators.minLength(3)]],
      teeLength: ['', [Validators.required, Validators.min(0)]],
      teeSlope: ['', [Validators.required, Validators.min(0)]],
      teeRating: ['', [Validators.required, Validators.min(0)]],
      selectedAmenities: [[], [Validators.required, Validators.minLength(1)]]
    });
  }

  isAmenitySelected(amenity: string): boolean {
    const selectedAmenities = this.teeForm.get('selectedAmenities')?.value || [];
    return selectedAmenities.includes(amenity);
  }

  toggleAmenity(amenity: string): void {
    const selectedAmenities = [...(this.teeForm.get('selectedAmenities')?.value || [])];
    const index = selectedAmenities.indexOf(amenity);

    if (index === -1) {
      selectedAmenities.push(amenity);
    } else {
      selectedAmenities.splice(index, 1);
    }

    this.teeForm.patchValue({ selectedAmenities });
    this.teeForm.get('selectedAmenities')?.markAsTouched();
  }

  get f() {
    return this.teeForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.teeForm.invalid) {
      return;
    }

    try {
      this.loading = true;

      // Add your API call here to save the tee data
      // const response = await this.teeService.createTee(this.teeForm.value);

      await Swal.fire({
        title: 'Success!',
        text: 'Tee has been created successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      this.router.navigate(['/tees']);
    } catch (error) {
      console.error('Error creating tee:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to create tee',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.teeForm.reset();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.teeForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.teeForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['minlength']) {
      if (fieldName === 'selectedAmenities') {
        return 'Please select at least one amenity';
      }
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    }
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;

    return 'Invalid input';
  }
}
