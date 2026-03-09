import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-team',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss'
})
export class TeamComponent {
routes = routes
}
