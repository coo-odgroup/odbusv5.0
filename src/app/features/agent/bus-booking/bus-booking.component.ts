import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { routes } from '../../../shared/routes/routes';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-bus-booking',
  imports: [RouterLink,DateRangePickerComponent],
  templateUrl: './bus-booking.component.html',
  styleUrl: './bus-booking.component.scss',
})
export class BusBookingComponent {
routes = routes
}
