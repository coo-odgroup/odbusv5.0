import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusRightSidebarComponent } from './bus-right-sidebar.component';

describe('BusRightSidebarComponent', () => {
  let component: BusRightSidebarComponent;
  let fixture: ComponentFixture<BusRightSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BusRightSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusRightSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
