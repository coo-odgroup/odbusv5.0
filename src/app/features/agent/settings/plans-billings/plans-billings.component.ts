import { Component } from '@angular/core';
import { routes } from '../../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-plans-billings',
  imports: [CommonModule,RouterLink,MatSelectModule],
  
  templateUrl: './plans-billings.component.html',
  styleUrl: './plans-billings.component.scss'
})
export class PlansBillingsComponent {
routes = routes
}
