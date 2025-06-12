import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../common-service/member/member.service';
import { MemberEnquiryService } from '../../common-service/memberEnquiry/member-enquiry.service';

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

interface MemberEnquiry {
  id: number;
  memberEnquiryDate: string;
  memberEnquiryPlan: any;
  memberEnquiryFirstName: string;
  memberEnquiryLastName: string;
  memberEnquiryPhoneNumber: string;
  memberEnquiryEmail: string;
  memberEnquiryMessage: string;
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

  // New properties for enquiry handling
  enquiryId: string | null = null;
  isFromEnquiry = false;
  pageTitle = 'New Member Profile';

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private memberEnquiryService: MemberEnquiryService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initializeForm();
  }

  private initializeForm(): void {
    const currentDate = new Date().toISOString().split('T')[0];

    this.memberForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: [''],
      email: ['', [Validators.required, Validators.email]],
      password: [''],
      phoneNumber: ['', [Validators.required]],
      alternatePhoneNumber: [''],
      dateOfBirth: ['', [Validators.required]],
      gender: [''],
      nationality: [''],
      address: [''],
      plan: [''],
      membershipStartDate: [currentDate, [Validators.required]],
      membershipEndDate: [''],
      emergencyContactName: [''],
      emergencyContactPhone: [''],
      emergencyContactRelation: [''],
      paymentStatus: [''],
      paymentMethod: [''],
      referredBy: [''],
      profilePhoto: [''],
      idProof: [''],
      handicap: [false],
      golfClubId: [''],
      // New fields for enquiry data
      enquiryId: [''],
      enquiryMessage: ['']
    });
  }

  private generatePassword(length: number = 12): string {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const special = '!@#$%^&*';

    // Ensure at least one character from each category
    let password = '';
    password += this.getRandomChar(uppercase);
    password += this.getRandomChar(lowercase);
    password += this.getRandomChar(numbers);
    password += this.getRandomChar(special);

    // Fill remaining length with random characters from all categories
    const allChars = uppercase + lowercase + numbers + special;
    for (let i = password.length; i < length; i++) {
      password += this.getRandomChar(allChars);
    }

    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  }

  private getRandomChar(charset: string): string {
    return charset[Math.floor(Math.random() * charset.length)];
  }

  async ngOnInit(): Promise<void> {
    try {
      // Check if this is from enquiry conversion
      this.route.queryParams.subscribe(params => {
        if (params['enquiryId']) {
          this.enquiryId = params['enquiryId'];
          this.isFromEnquiry = true;
          this.pageTitle = 'Convert Enquiry to Member';
        }
      });

      await this.loadDropdownData();

      // Load enquiry data if coming from enquiry conversion
      if (this.isFromEnquiry && this.enquiryId) {
        await this.loadEnquiryData();
      }
    } catch (error) {
      await this.showError('Failed to load form data');
    }
  }

  private async loadEnquiryData(): Promise<void> {
    try {
      console.log('Loading enquiry data for ID:', this.enquiryId);
      const response = await this.memberEnquiryService.listMemberEnquiry(this.enquiryId!);

      if (response?.data?.code === 1 && response.data.data && response.data.data.length > 0) {
        const enquiryData: MemberEnquiry = response.data.data[0];
        console.log('Enquiry data loaded:', enquiryData);

        // Pre-fill form with enquiry data
        this.memberForm.patchValue({
          firstName: enquiryData.memberEnquiryFirstName || '',
          lastName: enquiryData.memberEnquiryLastName || '',
          email: enquiryData.memberEnquiryEmail || '',
          phoneNumber: enquiryData.memberEnquiryPhoneNumber || '',
          plan: enquiryData.memberEnquiryPlan || '',
          enquiryId: this.enquiryId,
          enquiryMessage: enquiryData.memberEnquiryMessage || ''
        });

        console.log('Form patched with enquiry data');
      } else {
        console.error('Failed to load enquiry data or no data found');
        await this.showError('Failed to load enquiry data');
      }
    } catch (error) {
      console.error('Error loading enquiry data:', error);
      await this.showError('Failed to load enquiry data');
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
      const generatedPassword = this.generatePassword();

      // Create FormData
      const formData = new FormData();

      // Set the generated member ID in golfClubId field
      this.memberForm.patchValue({
        golfClubId: generatedMemberId,
        password: generatedPassword
      });

      // Log the generated credentials (remove in production)
      console.log('Generated Member ID:', generatedMemberId);
      console.log('Generated Password:', generatedPassword);

      // Append all form fields
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
        let successMessage = `Member has been created successfully with Golf Club ID: ${generatedMemberId}. Login credentials have been sent to their email.`;

        if (this.isFromEnquiry) {
          successMessage = `Enquiry has been successfully converted to member with Golf Club ID: ${generatedMemberId}. Login credentials have been sent to their email.`;
        }

        await Swal.fire({
          title: 'Success!',
          text: successMessage,
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

    // If from enquiry, reload the enquiry data
    if (this.isFromEnquiry && this.enquiryId) {
      this.loadEnquiryData();
    }
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

  // Method to cancel and go back (useful when converting from enquiry)
  onCancel(): void {
    if (this.isFromEnquiry) {
      this.router.navigate(['/member-enquiry']);
    } else {
      this.router.navigate(['/members']);
    }
  }
}
