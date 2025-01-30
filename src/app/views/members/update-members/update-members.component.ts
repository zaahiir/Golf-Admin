import { Component, OnInit } from '@angular/core';
import { NgStyle, NgClass, NgForOf, NgIf, CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RowComponent, ColComponent, TextColorDirective, CardComponent, CardHeaderComponent, CardBodyComponent, FormFloatingDirective, FormDirective, FormLabelDirective, FormControlDirective, FormFeedbackComponent, InputGroupComponent, InputGroupTextDirective, FormSelectDirective, ButtonDirective } from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../common-service/member/member.service';

interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  alternatePhoneNumber: string;
  address: string;
  dateOfBirth: string;
  gender: number;
  nationality: number;
  plan: number;
  golfClubId: string;
  membershipStartDate: string;
  membershipEndDate: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  paymentStatus: number;
  paymentMethod: number;
  referredBy: string;
  profilePhoto: string;
  idProof: string;
  handicap: boolean;
}

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
  selector: 'app-update-members',
  standalone: true,
  imports: [
    NgIf, CommonModule, NgClass, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    InputGroupComponent, InputGroupTextDirective, FormSelectDirective,
    ButtonDirective
  ],
  templateUrl: './update-members.component.html',
  styleUrl: './update-members.component.scss'
})
export class UpdateMembersComponent implements OnInit {
  memberForm!: FormGroup;
  loading = false;
  submitted = false;
  memberId: string = '';

  // Dropdown options
  genders: Gender[] = [];
  nationalities: Country[] = [];
  plans: Plan[] = [];
  paymentStatuses: PaymentStatus[] = [];
  paymentMethods: PaymentMethod[] = [];

  // Photo handling
  profilePhotoFile: File | null = null;
  idProofFile: File | null = null;
  profilePhotoPreview: string | ArrayBuffer | null = null;
  idProofPreview: string | ArrayBuffer | null = null;
  existingProfilePhoto: string | null = null;
  existingIdProof: string | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private memberService: MemberService
  ) {}

  ngOnInit(): void {
    this.initializeForm();
    this.loadDropdownData();
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.memberId = params['id'];
        this.loadMemberData(this.memberId);
      }
    });
  }

  private async loadDropdownData(): Promise<void> {
    try {
      // Replace these with your actual service calls
      const [genderRes, nationalityRes, planRes, paymentStatusRes, paymentMethodRes] = await Promise.all([
        this.memberService.getGender(),
        this.memberService.getNationality(),
        this.memberService.getPlan(),
        this.memberService.getPaymentStatus(),
        this.memberService.getPaymentMethod()
      ]);

      this.genders = this.transformDropdownData(genderRes.data.data, 'genderName');
      this.nationalities = this.transformDropdownData(nationalityRes.data.data, 'countryName');
      this.plans = this.transformDropdownData(planRes.data.data, 'planName');
      this.paymentStatuses = this.transformDropdownData(paymentStatusRes.data.data, 'statusName');
      this.paymentMethods = this.transformDropdownData(paymentMethodRes.data.data, 'methodName');
    } catch (error) {
      console.error('Error loading dropdown data:', error);
      await Swal.fire('Error', 'Failed to load form data', 'error');
    }
  }

  private transformDropdownData(data: any[], nameKey: string): DropdownOption[] {
    return data.map(item => ({
      id: item.id,
      name: item[nameKey]
    }));
  }

  private initializeForm(): void {
    const currentDate = new Date().toISOString().split('T')[0];

    this.memberForm = this.formBuilder.group({
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
      profilePhoto: [''],
      idProof: [''],
      handicap: [false]
    });
  }

  private async loadMemberData(id: string): Promise<void> {
    try {
      const response = await this.memberService.listMember(id);
      if (response?.data?.data?.[0]) {
        const memberData = response.data.data[0];
        this.patchFormValues(memberData);

        // Store existing file paths
        this.existingProfilePhoto = memberData.profilePhoto;
        this.existingIdProof = memberData.idProof;

        // Set previews for existing files
        if (memberData.profilePhoto) {
          this.profilePhotoPreview = memberData.profilePhoto;
        }
        if (memberData.idProof) {
          this.idProofPreview = memberData.idProof;
        }
      }
    } catch (error) {
      console.error('Error loading member data:', error);
      await Swal.fire('Error', 'Failed to load member data', 'error');
    }
  }

  private patchFormValues(data: Member): void {
    this.memberForm.patchValue({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      phoneNumber: data.phoneNumber,
      alternatePhoneNumber: data.alternatePhoneNumber,
      address: data.address,
      dateOfBirth: data.dateOfBirth,
      gender: data.gender,
      nationality: data.nationality,
      plan: data.plan,
      golfClubId: data.golfClubId,
      membershipStartDate: data.membershipStartDate,
      membershipEndDate: data.membershipEndDate,
      emergencyContactName: data.emergencyContactName,
      emergencyContactPhone: data.emergencyContactPhone,
      emergencyContactRelation: data.emergencyContactRelation,
      paymentStatus: data.paymentStatus,
      paymentMethod: data.paymentMethod,
      referredBy: data.referredBy,
      handicap: data.handicap
    });
  }

  onFileSelected(event: any, type: 'profile' | 'idProof'): void {
    const file = event.target.files[0];
    if (file) {
      if (type === 'profile') {
        this.profilePhotoFile = file;
        this.readFile(file).then(result => {
          this.profilePhotoPreview = result;
        });
        this.memberForm.patchValue({ profilePhoto: file });
      } else {
        this.idProofFile = file;
        this.readFile(file).then(result => {
          this.idProofPreview = result;
        });
        this.memberForm.patchValue({ idProof: file });
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
      this.memberForm.patchValue({ profilePhoto: '' });
    } else {
      this.idProofFile = null;
      this.idProofPreview = null;
      this.existingIdProof = null;
      this.memberForm.patchValue({ idProof: '' });
    }
  }

  get f() {
    return this.memberForm.controls;
  }

  async onSubmit(): Promise<void> {
    this.submitted = true;

    if (this.memberForm.invalid) {
      return;
    }

    try {
      this.loading = true;

      const formData = new FormData();
      Object.keys(this.memberForm.value).forEach(key => {
        const value = this.memberForm.get(key)?.value;

        if (key === 'profilePhoto' && this.profilePhotoFile) {
          formData.append(key, this.profilePhotoFile);
        } else if (key === 'idProof' && this.idProofFile) {
          formData.append(key, this.idProofFile);
        } else if (value !== null && value !== undefined) {
          formData.append(key, value);
        }
      });

      const response = await this.memberService.processMember(formData, this.memberId);

      if (response?.data?.code === 1) {
        await Swal.fire({
          title: 'Success!',
          text: 'Member profile has been updated successfully',
          icon: 'success',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/members']);
      } else {
        throw new Error(response?.data?.message || 'Failed to update member');
      }
    } catch (error) {
      console.error('Error updating member:', error);
      await Swal.fire({
        title: 'Error!',
        text: 'Failed to update member profile',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
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
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
    if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}`;
    if (control.errors['minlength']) return `Minimum length is ${control.errors['minlength'].requiredLength} characters`;

    return 'Invalid input';
  }
}
