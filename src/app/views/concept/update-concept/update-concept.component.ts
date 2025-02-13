import { Component, OnInit } from '@angular/core';
import { NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  RowComponent,
  ColComponent,
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
import { ConceptService } from '../../common-service/concept/concept.service';

@Component({
  selector: 'app-update-concept',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    RowComponent,
    ColComponent,
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
  templateUrl: './update-concept.component.html',
  styleUrl: './update-concept.component.scss'
})
export class UpdateConceptComponent implements OnInit {
  conceptForm!: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private conceptService: ConceptService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadConceptData();
  }

  private initializeForm(): void {
    this.conceptForm = this.formBuilder.group({
      conceptHighlight: ['', [Validators.required]],
      conceptHeadingOne: ['', [Validators.required]],
      conceptParaOne: ['', [Validators.required]],
      conceptHeadingTwo: ['', [Validators.required]],
      conceptParaTwo: ['', [Validators.required]],
      conceptHeadingThree: ['', [Validators.required]],
      conceptParaThree: ['', [Validators.required]],
      conceptHeadingFour: ['', [Validators.required]],
      conceptParaFour: ['', [Validators.required]],
      conceptHeadingFive: ['', [Validators.required]],
      conceptParaFive: ['', [Validators.required]],
      conceptHeadingSix: ['', [Validators.required]],
      conceptParaSix: ['', [Validators.required]],
      conceptHeadingSeven: ['', [Validators.required]],
      conceptParaSeven: ['', [Validators.required]],
      hideStatus: [0]
    });
  }

  private async loadConceptData(): Promise<void> {
    try {
      const response = await this.conceptService.listConcept();
      if (response.data.code === 1) {
        const conceptData = response.data.data;
        this.conceptForm.patchValue(conceptData);
      } else {
        throw new Error('Concept data not found');
      }
    } catch (error) {
      await this.showError('Failed to load concept data');
      this.router.navigate(['/']);
    }
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.conceptForm.invalid) {
      Object.keys(this.conceptForm.controls).forEach(key => {
        const control = this.conceptForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    try {
      this.loading = true;
      const formData = this.conceptForm.value;
      const response = await this.conceptService.processConcept(formData);

      if (response.data.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: 'Concept has been updated successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/concept']);
      } else {
        throw new Error(response.data.message || 'Unknown error occurred');
      }
    } catch (error) {
      await this.showError(error instanceof Error ? error.message : 'Failed to update concept');
    } finally {
      this.loading = false;
    }
  }

  onCancel(): void {
    this.router.navigate(['/']);
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.conceptForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.conceptForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['maxlength']) {
      return `Maximum length is ${control.errors['maxlength'].requiredLength} characters`;
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
