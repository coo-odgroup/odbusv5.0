import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-integration-settings',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './integration-settings.component.html',
  styleUrl: './integration-settings.component.scss'
})
export class IntegrationSettingsComponent {
routes=routes
}
