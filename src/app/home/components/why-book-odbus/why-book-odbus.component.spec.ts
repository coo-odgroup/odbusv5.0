import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyBookOdbusComponent } from './why-book-odbus.component';

describe('WhyBookOdbusComponent', () => {
  let component: WhyBookOdbusComponent;
  let fixture: ComponentFixture<WhyBookOdbusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ WhyBookOdbusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyBookOdbusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
