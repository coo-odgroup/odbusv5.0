import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAppAdComponent } from './top-app-ad.component';

describe('TopAppAdComponent', () => {
  let component: TopAppAdComponent;
  let fixture: ComponentFixture<TopAppAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TopAppAdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopAppAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
