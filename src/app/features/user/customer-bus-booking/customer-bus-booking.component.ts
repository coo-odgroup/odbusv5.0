import { Component } from '@angular/core';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-customer-bus-booking',
  imports: [DateRangePickerComponent,RouterLink],
  templateUrl: './customer-bus-booking.component.html',
  styleUrl: './customer-bus-booking.component.scss',
})
export class CustomerBusBookingComponent {
  routes = routes
}
