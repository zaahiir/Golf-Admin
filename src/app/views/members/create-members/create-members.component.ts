import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-members',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgClass, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    InputGroupComponent, InputGroupTextDirective, FormSelectDirective,
    ButtonDirective
  ],
  templateUrl: './create-members.component.html',
  styleUrl: './create-members.component.scss'
})

export class CreateMemberComponent implements OnInit {
  memberForm!: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    const currentDate = new Date().toISOString().split('T')[0];
    
    this.memberForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      dialCode: ['', [Validators.required]], // Default dial code
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Adjust as needed for other countries
      address: ['', [Validators.required, Validators.minLength(10)]],
      dateOfBirth: ['', [Validators.required]],
      membershipId: ['', [Validators.required]],
      membershipStartDate: [currentDate, [Validators.required]],
      emergencyContactName: ['', [Validators.required]],
      emergencyContactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emergencyContactRelation: ['', [Validators.required]],
      profilePhoto: [''],
      handicapIndex: ['', [Validators.required, Validators.min(0), Validators.max(54)]],
      lockerNumber: ['']
    });
  }  

  get f() { 
    return this.memberForm.controls; 
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Preview the selected image
      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = e.target?.result || null;
      };
      reader.readAsDataURL(file);

      // Update form control
      this.memberForm.patchValue({
        profilePhoto: file
      });
    }
  }

  removePhoto(): void {
    this.selectedFile = null;
    this.previewUrl = null;
    this.memberForm.patchValue({
      profilePhoto: ''
    });
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.memberForm.invalid) {
      return;
    }

    try {
      this.loading = true;

      // Create FormData object to handle file upload
      const formData = new FormData();
      Object.keys(this.memberForm.value).forEach(key => {
        if (key === 'profilePhoto' && this.selectedFile) {
          formData.append(key, this.selectedFile);
        } else {
          formData.append(key, this.memberForm.value[key]);
        }
      });

      // Add your API call here to save the member data
      // const response = await this.memberService.createMember(formData);
      
      await Swal.fire({
        title: 'Success!',
        text: 'Member profile has been created successfully',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      this.router.navigate(['/members']);
    } catch (error) {
      console.error('Error creating member profile:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to create member profile',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.selectedFile = null;
    this.previewUrl = null;
    this.memberForm.reset();
    this.memberForm.patchValue({
      membershipStartDate: new Date().toISOString().split('T')[0]
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.memberForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  // Helper function to generate error message
  getErrorMessage(fieldName: string): string {
    const control = this.memberForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Please enter a valid email address';
    if (control.errors['pattern']) {
      if (fieldName.includes('Phone')) return 'Please enter a valid 10-digit phone number';
    }
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
    if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}`;
    if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;

    return 'Invalid input';
  }
}