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
  selectedProfileFile: File | null = null;
  selectedIdProofFile: File | null = null;
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
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      dateOfBirth: ['', [Validators.required]],
      lastName: [''],
      password: [''],
      alternatePhoneNumber: [''],
      gender: [''],
      nationality: [''],
      address: [''],
      plan: [''],
      membershipStartDate: [currentDate],
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

      // Handle plan data - find matching plan ID from plans array
      let planId = '';
      if (enquiryData.memberEnquiryPlan) {
        // If memberEnquiryPlan is an object with id property
        if (typeof enquiryData.memberEnquiryPlan === 'object' && enquiryData.memberEnquiryPlan.id) {
          planId = enquiryData.memberEnquiryPlan.id.toString();
        }
        // If memberEnquiryPlan is just an ID (number or string)
        else if (typeof enquiryData.memberEnquiryPlan === 'number') {
          planId = enquiryData.memberEnquiryPlan.toString();
        }
        // If memberEnquiryPlan is a plan name (string), find the matching plan ID
        else if (typeof enquiryData.memberEnquiryPlan === 'string') {
          const matchingPlan = this.plans.find(plan =>
            plan.planName.toLowerCase() === enquiryData.memberEnquiryPlan.toLowerCase()
          );
          if (matchingPlan) {
            planId = matchingPlan.id.toString();
          }
        }
      }

      // Pre-fill form with enquiry data
      this.memberForm.patchValue({
        firstName: enquiryData.memberEnquiryFirstName || '',
        lastName: enquiryData.memberEnquiryLastName || '',
        email: enquiryData.memberEnquiryEmail || '',
        phoneNumber: enquiryData.memberEnquiryPhoneNumber || '',
        plan: planId, // Use the extracted/found plan ID
        enquiryId: this.enquiryId,
        enquiryMessage: enquiryData.memberEnquiryMessage || ''
      });

      console.log('Form patched with enquiry data, plan ID:', planId);

      // Log the matching plan for debugging
      if (planId) {
        const selectedPlan = this.plans.find(p => p.id.toString() === planId);
        console.log('Selected plan:', selectedPlan);
      }
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
        this.selectedProfileFile = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.previewUrl = e.target?.result || null;
        };
        reader.readAsDataURL(file);
      } else {
        this.selectedIdProofFile = file;
      }
    }
  }

  removePhoto(type: 'profile' | 'idProof'): void {
    if (type === 'profile') {
      this.selectedProfileFile = null;
      this.previewUrl = null;
      // Reset file input
      const fileInput = document.getElementById('profilePhoto') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    } else {
      this.selectedIdProofFile = null;
      // Reset file input
      const fileInput = document.getElementById('idProof') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
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
        await this.showError('Please fill in all required fields correctly.');
        return;
      }

      this.loading = true;

      // Generate member ID and password
      const generatedMemberId = await this.generateMemberId();
      const generatedPassword = this.generatePassword();

      console.log('Generated Member ID:', generatedMemberId);
      console.log('Generated Password:', generatedPassword);

      // Create FormData
      const formData = new FormData();

      // Get form values
      const formValues = this.memberForm.value;

      // Add required fields first
      formData.append('firstName', (formValues.firstName || '').toString().trim());
      formData.append('email', (formValues.email || '').toString().trim());
      formData.append('phoneNumber', (formValues.phoneNumber || '').toString().trim());
      formData.append('dateOfBirth', formValues.dateOfBirth ? new Date(formValues.dateOfBirth).toISOString().split('T')[0] : '');

      // Add generated fields
      formData.append('golfClubId', generatedMemberId);
      formData.append('password', generatedPassword);

      // Add optional fields only if they have values
      if (formValues.lastName && formValues.lastName.trim()) {
        formData.append('lastName', formValues.lastName.trim());
      }

      if (formValues.alternatePhoneNumber && formValues.alternatePhoneNumber.trim()) {
        formData.append('alternatePhoneNumber', formValues.alternatePhoneNumber.trim());
      }

      if (formValues.gender) {
        formData.append('gender', formValues.gender.toString());
      }

      if (formValues.nationality) {
        formData.append('nationality', formValues.nationality.toString());
      }

      if (formValues.address && formValues.address.trim()) {
        formData.append('address', formValues.address.trim());
      }

      if (formValues.plan) {
        formData.append('plan', formValues.plan.toString());
      }

      if (formValues.membershipStartDate) {
        formData.append('membershipStartDate', new Date(formValues.membershipStartDate).toISOString().split('T')[0]);
      }

      if (formValues.membershipEndDate) {
        formData.append('membershipEndDate', new Date(formValues.membershipEndDate).toISOString().split('T')[0]);
      }

      if (formValues.emergencyContactName && formValues.emergencyContactName.trim()) {
        formData.append('emergencyContactName', formValues.emergencyContactName.trim());
      }

      if (formValues.emergencyContactPhone && formValues.emergencyContactPhone.trim()) {
        formData.append('emergencyContactPhone', formValues.emergencyContactPhone.trim());
      }

      if (formValues.emergencyContactRelation && formValues.emergencyContactRelation.trim()) {
        formData.append('emergencyContactRelation', formValues.emergencyContactRelation.trim());
      }

      if (formValues.paymentStatus) {
        formData.append('paymentStatus', formValues.paymentStatus.toString());
      }

      if (formValues.paymentMethod) {
        formData.append('paymentMethod', formValues.paymentMethod.toString());
      }

      if (formValues.referredBy && formValues.referredBy.trim()) {
        formData.append('referredBy', formValues.referredBy.trim());
      }

      // Add boolean field
      formData.append('handicap', formValues.handicap ? 'true' : 'false');

      // Add enquiry fields if present
      if (formValues.enquiryId) {
        formData.append('enquiryId', formValues.enquiryId.toString());
      }

      if (formValues.enquiryMessage && formValues.enquiryMessage.trim()) {
        formData.append('enquiryMessage', formValues.enquiryMessage.trim());
      }

      // Add files if selected
      if (this.selectedProfileFile) {
        formData.append('profilePhoto', this.selectedProfileFile);
      }

      if (this.selectedIdProofFile) {
        formData.append('idProof', this.selectedIdProofFile);
      }

      // Log FormData contents for debugging
      console.log('FormData contents:');
      formData.forEach((value, key) => {
        console.log(`${key}:`, value);
      });

      const response = await this.memberService.processMember(formData);
      console.log('Server response:', response);

      if (response?.data?.code === 1) {
        let successMessage = `Member has been created successfully with Golf Club ID: ${generatedMemberId}. Login credentials have been sent to their email.`;

        // FIXED: Mark enquiry as converted BEFORE showing success message and navigating
        if (this.isFromEnquiry && this.enquiryId) {
          try {
            console.log('Attempting to mark enquiry as converted...');
            await this.markEnquiryAsConverted(this.enquiryId, generatedMemberId);
            console.log('Enquiry marked as converted successfully');
            successMessage = `Enquiry has been successfully converted to member with Golf Club ID: ${generatedMemberId}. Login credentials have been sent to their email.`;
          } catch (error) {
            console.error('Failed to mark enquiry as converted:', error);
            // Show a warning but don't fail the whole process
            await Swal.fire({
              title: 'Warning',
              text: `Member created successfully with ID: ${generatedMemberId}, but failed to update enquiry status. Please manually update the enquiry status.`,
              icon: 'warning',
              confirmButtonText: 'Ok'
            });
            // Still navigate to the appropriate page
            this.router.navigate([this.isFromEnquiry ? '/memberEnquiry' : '/members']);
            return;
          }
        }

        await Swal.fire({
          title: 'Success!',
          text: successMessage,
          icon: 'success',
          confirmButtonText: 'Ok'
        });

        // Navigate back to appropriate page
        if (this.isFromEnquiry) {
          this.router.navigate(['/memberEnquiry']);
        } else {
          this.router.navigate(['/members']);
        }
      } else {
        const errorMessage = response?.data?.message || 'Failed to create member';
        const errors = response?.data?.errors;

        if (errors) {
          console.error('Validation errors:', errors);
          let errorDetails = '';
          for (const [field, fieldErrors] of Object.entries(errors)) {
            if (Array.isArray(fieldErrors)) {
              errorDetails += `${field}: ${fieldErrors.join(', ')}\n`;
            }
          }
          throw new Error(`${errorMessage}\n\nDetails:\n${errorDetails}`);
        } else {
          throw new Error(errorMessage);
        }
      }
    } catch (error) {
      console.error('Submit error:', error);
      await this.showError(error instanceof Error ? error.message : 'Failed to create member');
    } finally {
      this.loading = false;
    }
  }

  // FIXED: Improved markEnquiryAsConverted method with better error handling
  private async markEnquiryAsConverted(enquiryId: string, memberId: string): Promise<void> {
    try {
      console.log('Marking enquiry as converted:', { enquiryId, memberId });

      const response = await this.memberEnquiryService.markEnquiryConverted(enquiryId, {
        convertedMemberId: memberId
      });

      console.log('Mark converted response:', response);

      if (response?.data?.code === 1) {
        console.log('Enquiry marked as converted successfully');
      } else {
        const errorMessage = response?.data?.message || 'Failed to mark enquiry as converted';
        console.error('Failed to mark enquiry as converted:', errorMessage);
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Error marking enquiry as converted:', error);
      // Re-throw the error to be handled by the calling function
      throw error;
    }
  }

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
    this.selectedProfileFile = null;
    this.selectedIdProofFile = null;
    this.previewUrl = null;
    this.memberForm.reset();
    this.memberForm.patchValue({
      membershipStartDate: new Date().toISOString().split('T')[0],
      handicap: false
    });

    // Reset file inputs
    const profileInput = document.getElementById('profilePhoto') as HTMLInputElement;
    const idProofInput = document.getElementById('idProof') as HTMLInputElement;
    if (profileInput) profileInput.value = '';
    if (idProofInput) idProofInput.value = '';

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
      if (fieldName === 'phoneNumber') return 'Please enter a valid 10-digit phone number';
    }
    if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;

    return 'Invalid input';
  }

  private async showError(message: string): Promise<void> {
    await Swal.fire('Error', message, 'error');
  }

  onCancel(): void {
    if (this.isFromEnquiry) {
      this.router.navigate(['/memberEnquiry']);
    } else {
      this.router.navigate(['/members']);
    }
  }
}
