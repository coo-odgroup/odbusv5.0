import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBusBookingComponent } from './customer-bus-booking.component';

describe('CustomerBusBookingComponent', () => {
  let component: CustomerBusBookingComponent;
  let fixture: ComponentFixture<CustomerBusBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerBusBookingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerBusBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
