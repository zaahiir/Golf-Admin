import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  RowComponent, ColComponent, TextColorDirective, CardComponent,
  CardHeaderComponent, CardBodyComponent, FormFloatingDirective,
  FormDirective, FormLabelDirective, FormControlDirective,
  FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective,
  FormSelectDirective, ButtonDirective
} from '@coreui/angular';
import { MemberService } from '../../common-service/member/member.service';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

interface Gender {
  id: number;
  genderName: string;
}

interface Country {
  id: number;
  countryName: string;
}

interface Plan {
  id: number;
  planName: string;
}

interface PaymentStatus {
  id: number;
  statusName: string;
}

interface PaymentMethod {
  id: number;
  methodName: string;
}

@Component({
  selector: 'app-update-members',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    FormSelectDirective, ButtonDirective
  ],
  templateUrl: './update-members.component.html',
  styleUrl: './update-members.component.scss'
})
export class UpdateMembersComponent implements OnInit {
  memberForm!: FormGroup;
  loading = false;
  submitted = false;
  customStylesValidated = false;
  memberId: string = '';

  genders: Gender[] = [];
  nationalities: Country[] = [];
  plans: Plan[] = [];
  paymentStatuses: PaymentStatus[] = [];
  paymentMethods: PaymentMethod[] = [];

  profilePhotoFile: File | null = null;
  idProofFile: File | null = null;
  profilePhotoPreview: string | ArrayBuffer | null = null;
  idProofPreview: string | ArrayBuffer | null = null;
  existingProfilePhoto: string | null = null;
  existingIdProof: string | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {
    this.initializeForm();
  }

  get f() { return this.memberForm.controls; }

  private initializeForm(): void {
    const currentDate = new Date().toISOString().split('T')[0];

    this.memberForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      alternatePhoneNumber: ['', [Validators.pattern('^[0-9]{10}$')]],
      address: ['', [Validators.required, Validators.minLength(10)]],
      dateOfBirth: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      nationality: ['', [Validators.required]],
      plan: ['', [Validators.required]],
      golfClubId: [{value: '', disabled: true}],
      membershipStartDate: [currentDate, [Validators.required]],
      membershipEndDate: [''],
      emergencyContactName: ['', [Validators.required]],
      emergencyContactPhone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      emergencyContactRelation: ['', [Validators.required]],
      paymentStatus: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      referredBy: [''],
      handicap: [false]
    });
  }

  async ngOnInit(): Promise<void> {
    try {
      await Promise.all([
        this.loadGenders(),
        this.loadNationalities(),
        this.loadPlans(),
        this.loadPaymentStatuses(),
        this.loadPaymentMethods()
      ]);

      this.route.params.subscribe(params => {
        if (params['id']) {
          this.memberId = params['id'];
          this.loadMemberData(this.memberId);
        }
      });
    } catch (error) {
      console.error('Error during initialization:', error);
      await this.showError('An error occurred during initialization.');
    }
  }

  async loadGenders(): Promise<void> {
    try {
      const response = await this.memberService.getGender();
      if (response?.data?.code === 1) {
        this.genders = response.data.data;
      }
    } catch (error) {
      console.error('Error loading genders:', error);
      throw error;
    }
  }

  async loadNationalities(): Promise<void> {
    try {
      const response = await this.memberService.getNationality();
      if (response?.data?.code === 1) {
        this.nationalities = response.data.data;
      }
    } catch (error) {
      console.error('Error loading nationalities:', error);
      throw error;
    }
  }

  async loadPlans(): Promise<void> {
    try {
      const response = await this.memberService.getPlan();
      if (response?.data?.code === 1) {
        this.plans = response.data.data;
      }
    } catch (error) {
      console.error('Error loading plans:', error);
      throw error;
    }
  }

  async loadPaymentStatuses(): Promise<void> {
    try {
      const response = await this.memberService.getPaymentStatus();
      if (response?.data?.code === 1) {
        this.paymentStatuses = response.data.data;
      }
    } catch (error) {
      console.error('Error loading payment statuses:', error);
      throw error;
    }
  }

  async loadPaymentMethods(): Promise<void> {
    try {
      const response = await this.memberService.getPaymentMethod();
      if (response?.data?.code === 1) {
        this.paymentMethods = response.data.data;
      }
    } catch (error) {
      console.error('Error loading payment methods:', error);
      throw error;
    }
  }

  async loadMemberData(memberId: string): Promise<void> {
    try {
      const response = await this.memberService.listMember(memberId);
      if (response.data.code === 1 && response.data.data.length > 0) {
        const memberData = response.data.data[0];

        // Find the matching IDs from the arrays based on names
        const gender = this.genders.find(g => g.genderName === memberData.gender)?.id;
        const nationality = this.nationalities.find(n => n.countryName === memberData.nationality)?.id;
        const plan = this.plans.find(p => p.planName === memberData.plan)?.id;
        const paymentStatus = this.paymentStatuses.find(s => s.statusName === memberData.paymentStatus)?.id;
        const paymentMethod = this.paymentMethods.find(m => m.methodName === memberData.paymentMethod)?.id;

        this.memberForm.patchValue({
          firstName: memberData.firstName,
          lastName: memberData.lastName,
          email: memberData.email,
          phoneNumber: memberData.phoneNumber,
          alternatePhoneNumber: memberData.alternatePhoneNumber,
          address: memberData.address,
          dateOfBirth: memberData.dateOfBirth,
          gender: gender,
          nationality: nationality,
          plan: plan,
          golfClubId: memberData.golfClubId,
          membershipStartDate: memberData.membershipStartDate,
          membershipEndDate: memberData.membershipEndDate,
          emergencyContactName: memberData.emergencyContactName,
          emergencyContactPhone: memberData.emergencyContactPhone,
          emergencyContactRelation: memberData.emergencyContactRelation,
          paymentStatus: paymentStatus,
          paymentMethod: paymentMethod,
          referredBy: memberData.referredBy,
          handicap: memberData.handicap
        });

        if (memberData.profilePhoto) {
          this.existingProfilePhoto = memberData.profilePhoto;
          this.profilePhotoPreview = memberData.profilePhoto;
        }
        if (memberData.idProof) {
          this.existingIdProof = memberData.idProof;
          this.idProofPreview = memberData.idProof;
        }
      }
    } catch (error) {
      console.error('Error loading member data:', error);
      await this.showError('Failed to load member data.');
    }
  }

  onFileSelected(event: any, type: 'profile' | 'idProof'): void {
    const file = event.target.files[0];
    if (file) {
      if (type === 'profile') {
        this.profilePhotoFile = file;
        this.readFile(file).then(result => {
          this.profilePhotoPreview = result;
        });
      } else {
        this.idProofFile = file;
        this.readFile(file).then(result => {
          this.idProofPreview = result;
        });
      }
    }
  }

  private readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result || '');
      reader.readAsDataURL(file);
    });
  }

  removeFile(type: 'profile' | 'idProof'): void {
    if (type === 'profile') {
      this.profilePhotoFile = null;
      this.profilePhotoPreview = null;
      this.existingProfilePhoto = null;
    } else {
      this.idProofFile = null;
      this.idProofPreview = null;
      this.existingIdProof = null;
    }
  }

  async onSubmit(): Promise<void> {
    this.customStylesValidated = true;
    this.submitted = true;

    if (this.memberForm.invalid) {
      Object.values(this.memberForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsTouched();
        }
      });
      return;
    }

    this.loading = true;

    try {
      const formData = new FormData();
      Object.keys(this.memberForm.value).forEach(key => {
        const value = this.memberForm.get(key)?.value;
        if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      if (this.profilePhotoFile) {
        formData.append('profilePhoto', this.profilePhotoFile);
      }
      if (this.idProofFile) {
        formData.append('idProof', this.idProofFile);
      }

      const response = await this.memberService.processMember(formData, this.memberId);

      if (response?.data?.code === 1) {
        await Swal.fire("Updated!", response.data.message, "success");
        this.router.navigate(['/members']);
      } else {
        throw new Error(response?.data?.message || 'Failed to update member');
      }
    } catch (error) {
      console.error('Error updating member:', error);
      await this.showError("An error occurred while updating the member.");
    } finally {
      this.loading = false;
    }
  }

  onCancel(): void {
    this.router.navigate(['/members']);
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
    if (control.errors['minlength']) {
      return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;
    }

    return 'Invalid input';
  }

  private async showError(message: string): Promise<void> {
    await Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error'
    });
  }
}
