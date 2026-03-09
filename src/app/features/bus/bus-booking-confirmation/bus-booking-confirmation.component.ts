import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-bus-booking-confirmation',
  imports: [RouterLink],
  templateUrl: './bus-booking-confirmation.component.html',
  styleUrl: './bus-booking-confirmation.component.scss',
})
export class BusBookingConfirmationComponent {
routes = routes
}
