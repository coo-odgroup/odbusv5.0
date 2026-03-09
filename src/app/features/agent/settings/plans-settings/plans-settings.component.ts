import { CommonModule } from '@angular/common';
import { routes } from './../../../../shared/routes/routes';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-plans-settings',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './plans-settings.component.html',
  styleUrl: './plans-settings.component.scss'
})
export class PlansSettingsComponent {
routes = routes
}
