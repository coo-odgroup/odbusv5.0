import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeTopBannerComponent } from './home-top-banner.component';

describe('HomeTopBannerComponent', () => {
  let component: HomeTopBannerComponent;
  let fixture: ComponentFixture<HomeTopBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HomeTopBannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeTopBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
