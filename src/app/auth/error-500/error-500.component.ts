import { Component, Renderer2 } from '@angular/core';
import { routes } from '../../shared/routes/routes';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-500',
  imports: [CommonModule,RouterLink],
  
  templateUrl: './error-500.component.html',
  styleUrl: './error-500.component.scss'
})
export class Error500Component {
routes = routes
constructor(
  private renderer:Renderer2
){}
ngOnInit(): void {
 this.renderer.addClass(document.body, 'bg-primary-transparent');
}
ngOnDestroy(): void {
 this.renderer.removeClass(document.body, 'bg-primary-transparent');
}
}
