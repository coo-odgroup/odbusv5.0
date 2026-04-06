import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusFestiveOfferComponent } from './bus-festive-offer.component';

describe('BusFestiveOfferComponent', () => {
  let component: BusFestiveOfferComponent;
  let fixture: ComponentFixture<BusFestiveOfferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusFestiveOfferComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusFestiveOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
