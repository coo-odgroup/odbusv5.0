import { CommonModule } from '@angular/common';
import { routes } from './../../../shared/routes/routes';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-destination',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './destination.component.html',
  styleUrl: './destination.component.scss'
})
export class DestinationComponent {
routes = routes
}
