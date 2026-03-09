import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-car-booking-confirmation',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './car-booking-confirmation.component.html',
  styleUrl: './car-booking-confirmation.component.scss'
})
export class CarBookingConfirmationComponent {
 public routes=routes;
}
