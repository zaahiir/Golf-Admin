import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { 
  RowComponent, 
  ColComponent, 
  CardComponent, 
  CardHeaderComponent, 
  CardBodyComponent, 
  FormFloatingDirective, 
  FormControlDirective, 
  FormLabelDirective, 
  FormFeedbackComponent, 
  ButtonDirective,
  FormSelectDirective
} from '@coreui/angular';
import Swal from 'sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

interface CourseInfo {
  id: number;
  name: string;
  holes: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

interface TimeSlot {
  time: string;
  available: boolean;
}

interface BookingDetails {
  id: number;
  memberId: string;
  courseId: number;
  bookingDate: string;
  timeSlot: string;
  numberOfPlayers: number;
  additionalGuests: number;
  cartRequired: boolean;
  specialRequirements?: string;
}

@Component({
  selector: 'app-update-booking',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgFor,
    NgIf,
    RowComponent,
    ColComponent,
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    FormFloatingDirective,
    FormControlDirective,
    FormLabelDirective,
    FormFeedbackComponent,
    ButtonDirective,
    FormSelectDirective
  ],
  templateUrl: './update-booking.component.html',
  styleUrl: './update-booking.component.scss'
})
export class UpdateBookingComponent implements OnInit {
  updateBookingForm!: FormGroup;
  submitted = false;
  loading = false;
  bookingId: number | null = null;
  existingBooking: BookingDetails | null = null;

  // Sample course information (would typically come from a service)
  courses: CourseInfo[] = [
    { id: 1, name: 'Championship Course', holes: 18, difficulty: 'Hard' },
    { id: 2, name: 'Meadow Course', holes: 9, difficulty: 'Easy' },
    { id: 3, name: 'Lake Course', holes: 18, difficulty: 'Medium' }
  ];

  // Sample time slots (would typically be dynamically fetched)
  timeSlots: TimeSlot[] = [
    { time: '06:00 AM', available: true },
    { time: '07:00 AM', available: true },
    { time: '08:00 AM', available: true },
    { time: '09:00 AM', available: false },
    { time: '10:00 AM', available: true },
    { time: '11:00 AM', available: true },
    { time: '12:00 PM', available: false },
    { time: '01:00 PM', available: true },
    { time: '02:00 PM', available: true },
    { time: '03:00 PM', available: true }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get booking ID from route parameter
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.bookingId = Number(idParam);
        this.fetchBookingDetails();
      } else {
        // Redirect if no booking ID is provided
        this.router.navigate(['/bookings']);
      }
    });
  }

  private initializeUpdateBookingForm(booking: BookingDetails): void {
    this.updateBookingForm = this.formBuilder.group({
      memberId: [booking.memberId, [Validators.required]],
      courseId: [booking.courseId, [Validators.required]],
      bookingDate: [booking.bookingDate, [Validators.required]],
      timeSlot: [booking.timeSlot, [Validators.required]],
      numberOfPlayers: [booking.numberOfPlayers, [Validators.required, Validators.min(1), Validators.max(4)]],
      additionalGuests: [booking.additionalGuests, [Validators.min(0), Validators.max(3)]],
      cartRequired: [booking.cartRequired],
      specialRequirements: [booking.specialRequirements || '']
    });
  }

  // Fetch booking details for the specific booking ID
  private async fetchBookingDetails(): Promise<void> {
    try {
      this.loading = true;
      // Simulate fetching booking details (replace with actual API call)
      const booking = await this.getBookingById(this.bookingId!);
      
      if (booking) {
        this.existingBooking = booking;
        this.initializeUpdateBookingForm(booking);
      } else {
        // Booking not found
        await Swal.fire({
          title: 'Booking Not Found',
          text: 'The requested booking could not be found.',
          icon: 'error',
          confirmButtonText: 'Ok'
        });
        this.router.navigate(['/bookings']);
      }
    } catch (error) {
      console.error('Error fetching booking details:', error);
      await Swal.fire({
        title: 'Error',
        text: 'Unable to load booking details. Please try again.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
      this.router.navigate(['/bookings']);
    } finally {
      this.loading = false;
    }
  }

  // Convenience getter for easy access to form controls
  get f() { 
    return this.updateBookingForm.controls; 
  }

  // Check if a field is invalid
  isFieldInvalid(fieldName: string): boolean {
    const field = this.updateBookingForm.get(fieldName);
    return Boolean(field && field.invalid && (field.dirty || field.touched || this.submitted));
  }

  // Generate error message for invalid fields
  getErrorMessage(fieldName: string): string {
    const control = this.updateBookingForm.get(fieldName);
    if (!control || !control.errors) return '';

    if (control.errors['required']) return 'This field is required';
    if (control.errors['min']) return `Minimum value is ${control.errors['min'].min}`;
    if (control.errors['max']) return `Maximum value is ${control.errors['max'].max}`;

    return 'Invalid input';
  }

  // Filter available time slots based on selected date
  getAvailableTimeSlots(): TimeSlot[] {
    return this.timeSlots.filter(slot => slot.available);
  }

  // Get selected course details
  getSelectedCourse(): CourseInfo | undefined {
    const courseId = this.updateBookingForm.get('courseId')?.value;
    return this.courses.find(course => course.id === Number(courseId));
  }

  // Submit updated booking form
  async onSubmit(): Promise<void> {
    this.submitted = true;

    // Check form validity
    if (this.updateBookingForm.invalid) {
      return;
    }

    try {
      this.loading = true;

      // Simulate booking update (replace with actual API call)
      await this.updateBooking(this.bookingId!, this.updateBookingForm.value);

      // Show success message
      await Swal.fire({
        title: 'Booking Updated!',
        text: 'Your tee time has been successfully updated.',
        icon: 'success',
        confirmButtonText: 'Ok'
      });

      // Navigate to bookings list or dashboard
      this.router.navigate(['/bookings']);
    } catch (error) {
      console.error('Booking update error:', error);

      // Show error message
      await Swal.fire({
        title: 'Update Failed',
        text: 'Unable to update your booking. Please try again.',
        icon: 'error',
        confirmButtonText: 'Ok'
      });
    } finally {
      this.loading = false;
    }
  }

  // Reset form to original booking details
  onReset(): void {
    this.submitted = false;
    if (this.existingBooking) {
      this.initializeUpdateBookingForm(this.existingBooking);
    }
  }

  // Simulate booking update (replace with actual service method)
  private async updateBooking(bookingId: number, bookingData: any): Promise<void> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In a real application, you would call a booking service here
    console.log(`Updating booking ${bookingId} with:`, bookingData);
  }

  // Simulate getting booking by ID (replace with actual service method)
  private async getBookingById(bookingId: number): Promise<BookingDetails | null> {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Mock existing booking (in real app, this would come from a backend service)
    const mockBookings: BookingDetails[] = [
      {
        id: 1,
        memberId: 'M12345',
        courseId: 1,
        bookingDate: new Date().toISOString().split('T')[0],
        timeSlot: '08:00 AM',
        numberOfPlayers: 2,
        additionalGuests: 1,
        cartRequired: true,
        specialRequirements: 'Prefer shaded tee area'
      }
    ];

    return mockBookings.find(booking => booking.id === bookingId) || null;
  }
}