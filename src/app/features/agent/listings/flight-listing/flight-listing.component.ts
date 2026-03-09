import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-flight-listing',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './flight-listing.component.html',
  styleUrl: './flight-listing.component.scss'
})
export class FlightListingComponent {
routes = routes
}
