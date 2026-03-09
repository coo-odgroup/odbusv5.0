import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusBookingConfirmationComponent } from './bus-booking-confirmation.component';

describe('BusBookingConfirmationComponent', () => {
  let component: BusBookingConfirmationComponent;
  let fixture: ComponentFixture<BusBookingConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusBookingConfirmationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusBookingConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
