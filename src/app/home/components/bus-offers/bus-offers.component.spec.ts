import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusOffersComponent } from './bus-offers.component';

describe('BusOffersComponent', () => {
  let component: BusOffersComponent;
  let fixture: ComponentFixture<BusOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ BusOffersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
