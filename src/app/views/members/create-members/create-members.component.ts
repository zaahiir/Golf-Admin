import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { MemberService } from '../../common-service/member/member.service';

interface Gender {
  id: number;
  genderName: string;
}

interface Country {
  id: number;
  countryName: string;
}

interface PaymentStatus {
  id: number;
  statusName: string;
}

interface PaymentMethod {
  id: number;
  methodName: string;
}

interface Plan {
  id: number;
  planName: string;
}

@Component({
  selector: 'app-create-members',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    FormSelectDirective, ButtonDirective
  ],
  templateUrl: './create-members.component.html',
  styleUrl: './create-members.component.scss'
})
export class CreateMemberComponent implements OnInit {
  readonly CLUB_PREFIX = 'MGC';
  memberForm!: FormGroup;
  loading = false;
  submitted = false;
  selectedFile: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;

  genders: Gender[] = [];
  countries: Country[] = [];
  paymentStatuses: PaymentStatus[] = [];
  paymentMethods: PaymentMethod[] = [];
  plans: Plan[] = [];

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private router: Router
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    const currentDate = new Date().toISOString().split('T')[0];

    this.memberForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      alternatePhoneNumber: [''],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      address: ['', [Validators.required]],
      plan: ['', [Validators.required]],
      membershipStartDate: [currentDate, [Validators.required]],
      membershipEndDate: [''],
      emergencyContactName: ['', [Validators.required]],
      emergencyContactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emergencyContactRelation: ['', [Validators.required]],
      paymentStatus: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      referredBy: [''],
      profilePhoto: [''],
      idProof: [''],
      handicap: [false],
      golfClubId: ['']
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      await this.loadDropdownData();
    } catch (error) {
      await this.showError('Failed to load form data');
    }
  }

  get f() { return this.memberForm.controls; }

  private async loadDropdownData(): Promise<void> {
    try {
      const [genderRes, countryRes, planRes, statusRes, methodRes] = await Promise.all([
        this.memberService.getGender(),
        this.memberService.getNationality(),
        this.memberService.getPlan(),
        this.memberService.getPaymentStatus(),
        this.memberService.getPaymentMethod()
      ]);

      // Updated data assignment with proper null checking and array handling
      if (genderRes?.data) {
        this.genders = Array.isArray(genderRes.data) ? genderRes.data :
                      genderRes.data.data ? genderRes.data.data :
                      [];
      }

      if (countryRes?.data) {
        this.countries = Array.isArray(countryRes.data) ? countryRes.data :
                        countryRes.data.data ? countryRes.data.data :
                        [];
      }

      if (planRes?.data) {
        this.plans = Array.isArray(planRes.data) ? planRes.data :
                     planRes.data.data ? planRes.data.data :
                     [];
      }

      if (statusRes?.data) {
        this.paymentStatuses = Array.isArray(statusRes.data) ? statusRes.data :
                              statusRes.data.data ? statusRes.data.data :
                              [];
      }

      if (methodRes?.data) {
        this.paymentMethods = Array.isArray(methodRes.data) ? methodRes.data :
                             methodRes.data.data ? methodRes.data.data :
                             [];
      }

      console.log('Loaded data:', {
        genders: this.genders,
        countries: this.countries,
        plans: this.plans,
        paymentStatuses: this.paymentStatuses,
        paymentMethods: this.paymentMethods
      });
    } catch (error) {
      console.error('Error loading dropdown data:', error);
      throw error;
    }
  }

  onFileSelected(event: any, type: 'profile' | 'idProof'): void {
    const file = event.target.files[0];
    if (file) {
      if (type === 'profile') {
        this.selectedFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewUrl = e.target?.result || null;
        };
        reader.readAsDataURL(file);
        this.memberForm.patchValue({ profilePhoto: file });
      } else {
        this.memberForm.patchValue({ idProof: file });
      }
    }
  }

  removePhoto(type: 'profile' | 'idProof'): void {
    if (type === 'profile') {
      this.selectedFile = null;
      this.previewUrl = null;
      this.memberForm.patchValue({ profilePhoto: '' });
    } else {
      this.memberForm.patchValue({ idProof: '' });
    }
  }

  async onSubmit(): Promise<void> {
    try {
      this.submitted = true;
      console.log('Form submission started', this.memberForm.value);

      if (this.memberForm.invalid) {
        console.log('Form validation errors:', this.getFormValidationErrors());
        const firstInvalidField = this.getFirstInvalidField();
        if (firstInvalidField) {
          const element = document.querySelector(`[formcontrolname="${firstInvalidField}"]`);
          element?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
        return;
      }

      this.loading = true;

      // Generate member ID with MGC prefix
      const generatedMemberId = await this.generateMemberId();
      console.log('Generated Golf Club ID:', generatedMemberId);

      // Create FormData
      const formData = new FormData();

      // Set the generated member ID in golfClubId field
      this.memberForm.patchValue({ golfClubId: generatedMemberId });

      // Append all form fields including golfClubId
      Object.keys(this.memberForm.value).forEach(key => {
        const value = this.memberForm.get(key)?.value;

        if (value !== null && value !== undefined) {
          if (key === 'profilePhoto' && this.selectedFile) {
            formData.append(key, this.selectedFile);
          } else if (key === 'idProof' && this.memberForm.get('idProof')?.value instanceof File) {
            formData.append(key, this.memberForm.get('idProof')?.value);
          } else if (key === 'dateOfBirth' || key === 'membershipStartDate' || key === 'membershipEndDate') {
            const dateValue = value ? new Date(value).toISOString().split('T')[0] : '';
            formData.append(key, dateValue);
          } else if (typeof value === 'boolean') {
            formData.append(key, value.toString());
          } else {
            formData.append(key, value.toString().trim());
          }
        }
      });

      // Log FormData contents for debugging
      formData.forEach((value, key) => {
        console.log(`FormData field - ${key}:`, value);
      });

      const response = await this.memberService.processMember(formData);
      console.log('Server response:', response);

      if (response?.data?.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: `Member has been created successfully with Golf Club ID: ${generatedMemberId}`,
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/members']);
      } else {
        throw new Error(response?.data?.message || 'Failed to create member');
      }
    } catch (error) {
      console.error('Submit error:', error);
      await this.showError(error instanceof Error ? error.message : 'Failed to create member');
    } finally {
      this.loading = false;
    }
  }

  // Keep existing generateMemberId method unchanged
  private async generateMemberId(): Promise<string> {
    try {
      const currentDate = new Date();
      const year = currentDate.getFullYear().toString().slice(-2);
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');

      // Get the last member ID for the current month
      const lastMemberId = await this.memberService.getLastMemberId(year, month);

      let sequence: number;
      if (!lastMemberId) {
        sequence = 1;
      } else {
        const lastSequence = parseInt(lastMemberId.slice(-4));
        sequence = lastSequence + 1;
      }

      const sequenceStr = sequence.toString().padStart(4, '0');
      return `${this.CLUB_PREFIX}${year}${month}${sequenceStr}`;
    } catch (error) {
      console.error('Error generating member ID:', error);
      throw new Error('Failed to generate member ID');
    }
  }

  // Helper method to get all form validation errors
  private getFormValidationErrors(): Record<string, any> {
    const errors: Record<string, any> = {};
    Object.keys(this.memberForm.controls).forEach(key => {
      const control = this.memberForm.get(key);
      if (control?.errors) {
        errors[key] = control.errors;
      }
    });
    return errors;
  }

  // Helper method to get the first invalid field name
  private getFirstInvalidField(): string | null {
    const controls = this.memberForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        return name;
      }
    }
    return null;
  }

  onReset(): void {
    this.submitted = false;
    this.selectedFile = null;
    this.previewUrl = null;
    this.memberForm.reset();
    this.memberForm.patchValue({
      membershipStartDate: new Date().toISOString().split('T')[0],
      handicap: false
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.memberForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  getErrorMessage(fieldName: string): string {
    const control = this.memberForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['email']) return 'Please enter a valid email address';
    if (control.errors['pattern']) {
      if (fieldName.includes('Phone')) return 'Please enter a valid 10-digit phone number';
    }
    if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;

    return 'Invalid input';
  }

  private async showError(message: string): Promise<void> {
    await Swal.fire('Error', message, 'error');
  }
}
