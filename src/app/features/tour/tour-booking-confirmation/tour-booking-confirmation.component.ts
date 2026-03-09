import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tour-booking-confirmation',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './tour-booking-confirmation.component.html',
  styleUrl: './tour-booking-confirmation.component.scss'
})
export class TourBookingConfirmationComponent {
public routes =routes;
}
