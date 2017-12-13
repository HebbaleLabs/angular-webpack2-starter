import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintSliderComponent } from './print-slider.component';

describe('PrintSliderComponent', () => {
  let component: PrintSliderComponent;
  let fixture: ComponentFixture<PrintSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
