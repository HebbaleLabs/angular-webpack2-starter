import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnerTestimonialsComponent } from './learner-testimonials.component';

describe('LearnerTestimonialsComponent', () => {
  let component: LearnerTestimonialsComponent;
  let fixture: ComponentFixture<LearnerTestimonialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnerTestimonialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnerTestimonialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
