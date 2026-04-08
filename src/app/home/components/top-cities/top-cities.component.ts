import { Component, ElementRef, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../../../shared/routes/routes';

@Component({
  selector: 'app-top-cities',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './top-cities.component.html',
  styleUrls: ['./top-cities.component.scss']
})
export class TopCitiesComponent implements AfterViewInit {

  public routes = routes;

  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  showLeft = false;
  showRight = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
  setTimeout(() => {
    this.checkScroll();
    const el = this.scrollContainer.nativeElement;
    this.showRight = el.scrollWidth > el.clientWidth;

    this.cdr.detectChanges();
  }, 200);
}

  scrollLeft(): void {
    const el = this.scrollContainer.nativeElement;
    el.scrollBy({ left: -300, behavior: 'smooth' });

    setTimeout(() => {
      this.checkScroll();
    }, 300);
  }

  scrollRight(): void {
    const el = this.scrollContainer.nativeElement;
    el.scrollBy({ left: 300, behavior: 'smooth' });

    setTimeout(() => {
      this.checkScroll();
    }, 300);
  }

  onScroll(): void {
    this.checkScroll();
  }

  checkScroll(): void {
    const el = this.scrollContainer.nativeElement;

    const maxScrollLeft = el.scrollWidth - el.clientWidth;

    this.showLeft = el.scrollLeft > 5;
    this.showRight = el.scrollLeft < maxScrollLeft - 5;

    this.cdr.detectChanges();
  }
}