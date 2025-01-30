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
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';
import { MemberService } from '../../common-service/member/member.service';

interface Member {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
  address: string;
  dateOfBirth: string;
  gender: number;
  nationality: number;
  plan: number;
  golfClubId: string;
  membershipStartDate: string;
  membershipEndDate?: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  emergencyContactRelation: string;
  paymentStatus: number;
  paymentMethod: number;
  referredBy?: string;
  profilePhoto?: string;
  idProof?: string;
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
    NgIf, CommonModule, NgForOf, RowComponent, ColComponent,
    TextColorDirective, CardComponent, FormFloatingDirective, CardHeaderComponent,
    CardBodyComponent, ReactiveFormsModule, FormsModule, FormDirective,
    FormLabelDirective, FormControlDirective, FormFeedbackComponent,
    FormSelectDirective,ButtonDirective
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

  async ngOnInit(): Promise<void> {
    this.initializeForm();

    try {
      // First, load the dropdown data
      await this.loadDropdownData();

      // Then, get the ID and load member data
      const routeParams = await new Promise<any>(resolve => {
        this.route.params.subscribe(params => resolve(params));
      });

      if (routeParams['id']) {
        this.memberId = routeParams['id'];
        await this.loadMemberData(this.memberId);
      }
    } catch (error) {
      console.error('Error during initialization:', error);
      await this.showError('Failed to initialize form data.');
    }
  }

  private async showError(message: string): Promise<void> {
    await Swal.fire({
      title: 'Error',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok'
    });
  }

  private async loadDropdownData(): Promise<void> {
    try {
      const [genderRes, nationalityRes, planRes, paymentStatusRes, paymentMethodRes] = await Promise.all([
        this.memberService.getGender(),
        this.memberService.getNationality(),
        this.memberService.getPlan(),
        this.memberService.getPaymentStatus(),
        this.memberService.getPaymentMethod()
      ]);

      this.genders = genderRes.data.data;
      this.nationalities = nationalityRes.data.data;
      this.plans = planRes.data.data;
      this.paymentStatuses = paymentStatusRes.data.data;
      this.paymentMethods = paymentMethodRes.data.data;

      // Log the loaded dropdown data
      console.log('Loaded Dropdown Data:', {
        genders: this.genders,
        nationalities: this.nationalities,
        plans: this.plans,
        paymentStatuses: this.paymentStatuses,
        paymentMethods: this.paymentMethods
      });
    } catch (error) {
      console.error('Error loading dropdown data:', error);
      await Swal.fire('Error', 'Failed to load form data', 'error');
    }
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

        // Map the string values to corresponding IDs
        const gender = this.genders?.find(g => g.genderName.toLowerCase() === memberData.gender?.toLowerCase())?.id;
        const nationality = this.nationalities?.find(n => n.countryName.toLowerCase() === memberData.nationality?.toLowerCase())?.id;
        const plan = this.plans?.find(p => p.planName.toLowerCase() === memberData.plan?.toLowerCase())?.id;
        const paymentStatus = this.paymentStatuses?.find(s => s.statusName.toLowerCase() === memberData.paymentStatus?.toLowerCase())?.id;
        const paymentMethod = this.paymentMethods?.find(m => m.methodName.toLowerCase() === memberData.paymentMethod?.toLowerCase())?.id;

        // Add logging to debug the mapping
        console.log('Mapping Details:', {
          originalData: memberData,
          mappedValues: {
            gender,
            nationality,
            plan,
            paymentStatus,
            paymentMethod
          },
          availableOptions: {
            genders: this.genders,
            nationalities: this.nationalities,
            plans: this.plans,
            paymentStatuses: this.paymentStatuses,
            paymentMethods: this.paymentMethods
          }
        });

        // Patch the form with the mapped values
        this.memberForm.patchValue({
          firstName: memberData.firstName,
          lastName: memberData.lastName,
          email: memberData.email,
          phoneNumber: memberData.phoneNumber,
          alternatePhoneNumber: memberData.alternatePhoneNumber,
          address: memberData.address,
          dateOfBirth: memberData.dateOfBirth,
          gender: gender || '', // Provide default values if mapping fails
          nationality: nationality || '',
          plan: plan || '',
          golfClubId: memberData.golfClubId,
          membershipStartDate: memberData.membershipStartDate,
          membershipEndDate: memberData.membershipEndDate,
          emergencyContactName: memberData.emergencyContactName,
          emergencyContactPhone: memberData.emergencyContactPhone,
          emergencyContactRelation: memberData.emergencyContactRelation,
          paymentStatus: paymentStatus || '',
          paymentMethod: paymentMethod || '',
          referredBy: memberData.referredBy,
          handicap: memberData.handicap
        });

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

        // Log the form values after patching
        console.log('Form values after patch:', this.memberForm.value);
      }
    } catch (error) {
      console.error('Error loading member data:', error);
      await Swal.fire('Error', 'Failed to load member data', 'error');
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
