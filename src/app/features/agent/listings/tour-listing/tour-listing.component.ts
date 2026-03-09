import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tour-listing',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './tour-listing.component.html',
  styleUrl: './tour-listing.component.scss'
})
export class TourListingComponent {
routes = routes
}
