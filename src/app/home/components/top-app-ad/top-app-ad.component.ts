import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-top-app-ad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-app-ad.component.html',
  styleUrls: ['./top-app-ad.component.scss']
})

/* TOP OFFER BAR */

export class TopAppAdComponent {

  isOfferVisible = true;

  closeOfferBar() {
    this.isOfferVisible = false;
  }

}

/* TOP OFFER BAR end */