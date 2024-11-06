import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-plan',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgClass, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    InputGroupComponent, InputGroupTextDirective, FormSelectDirective,
    ButtonDirective
  ],
  templateUrl: './update-plan.component.html',
  styleUrl: './update-plan.component.scss'
})
export class UpdatePlanComponent  implements OnInit {
  planForm!: FormGroup;
  loading = false;
  submitted = false;

  planTypes = [
    { value: 'individual', label: 'Individual' },
    { value: 'family', label: 'Family' },
    { value: 'corporate', label: 'Corporate' }
  ];

  planDurations = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'quarterly', label: 'Quarterly' },
    { value: 'yearly', label: 'Yearly' }
  ];

  billingCycles = [
    { value: 'monthly', label: 'Monthly' },
    { value: 'annually', label: 'Annually' }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.planForm = this.formBuilder.group({
      planName: ['', [Validators.required, Validators.minLength(2)]],
      planDescription: ['', [Validators.required, Validators.minLength(10)]],
      planType: ['', [Validators.required]],
      planDuration: ['', [Validators.required]],
      planPrice: ['', [Validators.required, Validators.min(0)]],
      billingCycle: ['', [Validators.required]]
    });
  }

  get f() { 
    return this.planForm.controls; 
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.planForm.invalid) {
      return;
    }

    try {
      this.loading = true;

      // Add your API call here to save the plan data
      // const response = await this.planService.createPlan(this.planForm.value);
      
      await Swal.fire({
        title: 'Success!',
        text: 'Plan has been created successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      this.router.navigate(['/plans']);
    } catch (error) {
      console.error('Error creating plan:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to create plan',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.planForm.reset();
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.planForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.planForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;

    return 'Invalid input';
  }
}
