import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bus-offers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bus-offers.component.html',
  styleUrls: ['./bus-offers.component.scss']
})
export class BusOffersComponent implements AfterViewInit {

  @ViewChild('scrollContainer') container!: ElementRef;

  showLeft = false;
  showRight = true;

  ngAfterViewInit() {
    this.checkScroll();
  }

  scrollRight() {
    this.container.nativeElement.scrollBy({
      left: 350,
      behavior: 'smooth'
    });
  }

  scrollLeft() {
    this.container.nativeElement.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  }

  onScroll() {
    this.checkScroll();
  }

  checkScroll() {
    const el = this.container.nativeElement;

    this.showLeft = el.scrollLeft > 0;
    this.showRight = el.scrollLeft + el.clientWidth < el.scrollWidth - 5;
  }
}