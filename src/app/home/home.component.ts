import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CORE_MODULES } from '../shared/shared-import';
import { routes } from '../shared/routes/routes';
import { TopAppAdComponent } from './components/top-app-ad/top-app-ad.component';
import { HomeTopBannerComponent } from './components/home-top-banner/home-top-banner.component';
import { RecentSearchComponent } from './components/recent-search/recent-search.component';
import { BusFestiveOfferComponent } from './components/bus-festive-offer/bus-festive-offer.component';
import { WhyBookOdbusComponent } from './components/why-book-odbus/why-book-odbus.component';
import { BusOffersComponent } from './components/bus-offers/bus-offers.component';
import { TopCitiesComponent } from './components/top-cities/top-cities.component';
import { PopularRoutesComponent } from './components/popular-routes/popular-routes.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ...CORE_MODULES,
    TopAppAdComponent,
    HomeTopBannerComponent,
    RecentSearchComponent,
    BusFestiveOfferComponent,
    WhyBookOdbusComponent,
    BusOffersComponent,
    TopCitiesComponent,
    PopularRoutesComponent
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public routes = routes;

  time: Date | null = null;
  bsValue = new Date();

  isChecked = false;
  isChecked2 = false;
  isChecked3 = false;
  isChecked4 = false;
  isChecked5 = false;
  isChecked6 = false;
  isChecked7 = false;
  isChecked8 = false;

  toreset = true;

  public isClassAdded: boolean[] = [false];
  public isSelected: boolean[] = [false];

  constructor(private router: Router) { }

  // ================= ROUTES =================
  onSubmit(): void {
    this.router.navigateByUrl('/hotel/hotel-grid');
  }

  onSubmit2(): void {
    this.router.navigateByUrl('/flight/flight-grid');
  }

  onSubmit3(): void {
    this.router.navigateByUrl('/car/car-grid');
  }

  onSubmit4(): void {
    this.router.navigateByUrl('/cruise/cruise-grid');
  }

  onSubmit5(): void {
    this.router.navigateByUrl('/tour/tour-grid');
  }

  onSubmit6(): void {
    this.router.navigateByUrl('/bus/bus-list');
  }

  // ================= CHECKBOX LOGIC =================
  onCheck(): void {
    this.isChecked2 = false;
    this.isChecked3 = false;
  }

  onCheck2(): void {
    this.isChecked2 = true;
    this.isChecked3 = false;
  }

  onCheck3(): void {
    this.isChecked3 = true;
    this.isChecked2 = false;
  }

  onCheck4(): void {
    this.isChecked4 = true;
    this.isChecked5 = false;
    this.isChecked6 = false;
  }

  onCheck5(): void {
    this.isChecked5 = true;
    this.isChecked6 = false;
    this.isChecked4 = false;
    this.toreset = false;
  }

  onCheck6(): void {
    this.isChecked4 = false;
    this.isChecked6 = true;
    this.isChecked5 = false;
    this.toreset = false;
  }

  onCheck7(): void {
    this.isChecked7 = true;
    this.isChecked8 = false;
    this.toreset = false;
  }

  onCheck8(): void {
    this.isChecked8 = true;
    this.isChecked7 = false;
    this.toreset = false;
  }

  reset(): void {
    this.isChecked4 = false;
    this.isChecked5 = false;
    this.isChecked6 = false;
    this.toreset = true;
  }

  // ================= INIT =================
  ngOnInit(): void {
    const defaultTime = new Date();
    defaultTime.setHours(10, 30, 0, 0);
    this.time = defaultTime;
  }

  // ================= UI =================
  toggleClass(index: number) {
    this.isClassAdded[index] = !this.isClassAdded[index];
  }

  selectClass(index: number): void {
    this.isSelected[index] = !this.isSelected[index];
  }

}