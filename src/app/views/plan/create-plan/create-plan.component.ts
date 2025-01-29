// create-plan.component.ts
import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PlanService } from '../../common-service/plan/plan.service';

interface PlanType {
  id: number;
  planTypeName: string;
}

interface PlanDuration {
  id: number;
  planDurationName: string;
}

interface PlanCycle {
  id: number;
  planCycleName: string;
}

@Component({
  selector: 'app-create-plan',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    FormSelectDirective, ButtonDirective
  ],
  templateUrl: './create-plan.component.html',
  styleUrl: './create-plan.component.scss'
})
export class CreatePlanComponent implements OnInit {
  planForm!: FormGroup;
  loading = false;
  submitted = false;

  planTypes: PlanType[] = [];
  planDurations: PlanDuration[] = [];
  planCycles: PlanCycle[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private planService: PlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadDropdownData();
  }

  private async loadDropdownData(): Promise<void> {
    try {
      const [typesRes, durationsRes, cyclesRes] = await Promise.all([
        this.planService.getPlanTypes(),
        this.planService.getPlanDurations(),
        this.planService.getPlanCycles()
      ]);

      if (typesRes.data?.code === 1) {
        this.planTypes = typesRes.data.data;
      }
      if (durationsRes.data?.code === 1) {
        this.planDurations = durationsRes.data.data;
      }
      if (cyclesRes.data?.code === 1) {
        this.planCycles = cyclesRes.data.data;
      }
    } catch (error) {
      console.error('Error loading dropdown data:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to load form data',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    }
  }

  private initializeForm(): void {
    this.planForm = this.formBuilder.group({
      planName: ['', [Validators.required, Validators.minLength(2)]],
      planDescription: ['', [Validators.required, Validators.minLength(10)]],
      planType: ['', [Validators.required]],
      planDuration: ['', [Validators.required]],
      planPrice: ['', [Validators.required, Validators.min(0)]],
      planCycle: ['', [Validators.required]]
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
      const response = await this.planService.processPlan(this.planForm.value, '0');

      if (response.data?.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: 'Plan has been created successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/plans']);
      } else {
        throw new Error(response.data?.message || 'Failed to create plan');
      }
    } catch (error) {
      console.error('Error creating plan:', error);
      await Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'Failed to create plan',
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
