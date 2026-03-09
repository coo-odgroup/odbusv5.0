import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonCounterComponent } from '../../common/common-counter/common-counter.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-bus-list',
  imports: [ CommonModule,RouterLink,CommonCounterComponent,
    BsDatepickerModule,DatePickerModule,FormsModule
  ],
  templateUrl: './bus-list.component.html',
  styleUrl: './bus-list.component.scss',
})
export class BusListComponent {
public routes =routes;
  time: Date | null = null; // Bind this to the p-calendar
  constructor(private router: Router) {
  }
  bsValue=new Date();
  isChecked=false;
  isChecked2=false;
  toreset=true;
  public isClassAdded: boolean[] = [false];
 public isSelected :boolean[]=[false];
 toggleClass(index: number){
  this.isClassAdded[index] = !this.isClassAdded[index]
}
selectClass(index:number):void{
 this.isSelected[index]=!this.isSelected[index];
}
  onCheck() :void{
  this.isChecked=true;
  this.isChecked2=false;
  this.toreset=false;
}
onCheck2() :void{
  this.isChecked2=true;
  this.isChecked=false;
  this.toreset=false;
}
onSubmit() :void { 
this.router.navigateByUrl('/bus/bus-list'); 
} 
}
