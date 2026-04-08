import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-book-odbus',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './why-book-odbus.component.html',
  styleUrls: ['./why-book-odbus.component.scss']
})
export class WhyBookOdbusComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    const counters = this.el.nativeElement.querySelectorAll('.count');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          const element = entry.target as HTMLElement;
          const target = Number(element.getAttribute('data-target'));
          let count = 0;

          const speed = target / 50; // animation speed

          const updateCount = () => {
            if (count < target) {
              count += speed;
              element.innerText = Math.ceil(count).toString() + '+';
              requestAnimationFrame(updateCount);
            } else {
              element.innerText = target + '+';
            }
          };

          updateCount();
          observer.unobserve(element); // run only once
        }
      });
    }, { threshold: 0.5 });

    counters.forEach((counter: Element) => {
      observer.observe(counter);
    });
  }

}