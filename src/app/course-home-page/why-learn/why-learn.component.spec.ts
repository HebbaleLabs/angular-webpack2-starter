import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyLearnComponent } from './why-learn.component';

describe('WhyLearnComponent', () => {
  let component: WhyLearnComponent;
  let fixture: ComponentFixture<WhyLearnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WhyLearnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WhyLearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
