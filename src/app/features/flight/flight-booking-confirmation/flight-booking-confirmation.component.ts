import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-flight-booking-confirmation',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './flight-booking-confirmation.component.html',
  styleUrl: './flight-booking-confirmation.component.scss'
})
export class FlightBookingConfirmationComponent {
public routes=routes;
}
