import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { CountUpModule } from 'ngx-countup';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';

// Shared reusable components
import { CommonCounterComponent } from '../features/common/common-counter/common-counter.component';

// Export grouped arrays
export const UI_MODULES = [
  BsDatepickerModule,
  DatePickerModule
];

export const CORE_MODULES = [
  CommonModule,
  FormsModule,
  RouterLink,
  CountUpModule
];
export const SHARED_COMPONENTS = [
  CommonCounterComponent
];