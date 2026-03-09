import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonCounterComponent } from '../../common/common-counter/common-counter.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { DatePickerModule } from 'primeng/datepicker';
import { FormsModule } from '@angular/forms';
import { routes } from '../../../shared/routes/routes';
import { MatSliderModule } from '@angular/material/slider';

@Component({
  selector: 'app-bus-left-sidebar',
  imports: [ CommonModule,RouterLink,CommonCounterComponent,
    BsDatepickerModule,DatePickerModule,FormsModule,MatSliderModule
  ],
  templateUrl: './bus-left-sidebar.component.html',
  styleUrl: './bus-left-sidebar.component.scss',
})
export class BusLeftSidebarComponent  {
public routes =routes;
  time: Date | null = null; // Bind this to the p-calendar
  constructor(private router: Router) {
  }
  bsValue=new Date();
    startValue = 500;
  endValue = 3000;
  isChecked=false;
  isChecked2=false;
  
 public isClassAdded: boolean[] = [false];
 public isSelected :boolean[]=[false];
 toggleClass(index: number){
  this.isClassAdded[index] = !this.isClassAdded[index]
}
selectClass(index:number):void{
 this.isSelected[index]=!this.isSelected[index];
}
  showMore=false;
  isShow(){
    this.showMore=!this.showMore;
  }
  toreset=true;
    formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value) + '';
    }
  
    return `${value}`;
  }
  formatLabel1(value: number): string {
    if (value >= 5000) {
      return '$'+ Math.round(value / 5000) ;
    }
  
    return `$${value}`;
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
