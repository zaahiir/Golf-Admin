import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  CardComponent,
  CardHeaderComponent,
  CardBodyComponent,
  FormFloatingDirective,
  FormDirective,
  FormLabelDirective,
  FormControlDirective,
  FormFeedbackComponent,
  ButtonDirective,
  RowComponent,
  ColComponent
} from '@coreui/angular';
import { BlogService } from '../../common-service/blog/blog.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [
    NgIf,
    CommonModule,
    NgClass,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormFloatingDirective,
    FormDirective,
    FormLabelDirective,
    FormControlDirective,
    FormFeedbackComponent,
    ButtonDirective,
    RowComponent,
    ColComponent
  ],
  templateUrl: './create-blog.component.html',
  styleUrl: './create-blog.component.scss'
})
export class CreateBlogComponent implements OnInit {
  blogForm!: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: File | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.blogForm = this.formBuilder.group({
      blogTitle: ['', [Validators.required, Validators.minLength(3)]],
      blogDate: ['', [Validators.required]],
      blogDescription: ['', [Validators.required, Validators.minLength(10)]],
      blogImage: ['']
    });
  }

  onFileChange(event: Event): void {
    const element = event.target as HTMLInputElement;
    const file = element.files?.[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.blogForm.invalid) {
      return;
    }

    try {
      this.loading = true;
      const formData = new FormData();

      // Append form fields to FormData
      Object.keys(this.blogForm.value).forEach(key => {
        if (key !== 'blogImage') {
          formData.append(key, this.blogForm.value[key]);
        }
      });

      // Append file if selected
      if (this.selectedFile) {
        formData.append('blogImage', this.selectedFile);
      }

      await this.blogService.processBlog(formData);

      await Swal.fire({
        title: 'Success!',
        text: 'Blog post has been created successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      this.router.navigate(['/blogs']);
    } catch (error) {
      console.error('Error creating blog:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to create blog post',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.blogForm.reset();
    this.selectedFile = null;
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.blogForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.blogForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['minlength']) {
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    }

    return 'Invalid input';
  }
}
