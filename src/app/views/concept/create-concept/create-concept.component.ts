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
import { Router } from '@angular/router';
import { ConceptService } from '../../common-service/concept/concept.service';

@Component({
  selector: 'app-create-concept',
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
    ButtonDirective,
    ButtonModule
  ],
  templateUrl: './create-concept.component.html',
  styleUrl: './create-concept.component.scss'
})
export class CreateConceptComponent implements OnInit {
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
  }

  private initializeForm(): void {
    this.conceptForm = this.formBuilder.group({
      conceptHighlight: ['', [Validators.required, Validators.maxLength(255)]],
      conceptHeadingOne: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaOne: ['', [Validators.required, Validators.maxLength(1000)]],
      conceptHeadingTwo: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaTwo: ['', [Validators.required, Validators.maxLength(1000)]],
      conceptHeadingThree: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaThree: ['', [Validators.required, Validators.maxLength(1000)]],
      conceptHeadingFour: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaFour: ['', [Validators.required, Validators.maxLength(1000)]],
      conceptHeadingFive: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaFive: ['', [Validators.required, Validators.maxLength(1000)]],
      conceptHeadingSix: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaSix: ['', [Validators.required, Validators.maxLength(1000)]],
      conceptHeadingSeven: ['', [Validators.required, Validators.maxLength(255)]],
      conceptParaSeven: ['', [Validators.required, Validators.maxLength(1000)]],
      hideStatus: [0]
    });
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
      const response = await this.conceptService.processConcept(this.conceptForm.value);

      if (response.data.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: 'Concept has been created successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/concept']);
      } else {
        throw new Error(response.data.message || 'Unknown error occurred');
      }
    } catch (error) {
      await Swal.fire({
        title: 'Error!',
        text: error instanceof Error ? error.message : 'Failed to create concept',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.conceptForm.reset({
      hideStatus: 0
    });
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
      const maxLength = control.errors['maxlength'].requiredLength;
      return `Maximum length is ${maxLength} characters`;
    }

    return 'Invalid input';
  }
}
