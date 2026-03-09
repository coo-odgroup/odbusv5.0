import { Component } from '@angular/core';
import { routes } from '../../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';

@Component({
  selector: 'app-review',
  imports: [CommonModule,DateRangePickerComponent],
  
  templateUrl: './review.component.html',
  styleUrl: './review.component.scss'
})
export class ReviewComponent {
routes=routes;
}
