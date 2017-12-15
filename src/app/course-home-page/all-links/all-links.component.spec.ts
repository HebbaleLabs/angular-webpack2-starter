import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLinksComponent } from './all-links.component';

describe('AllLinksComponent', () => {
  let component: AllLinksComponent;
  let fixture: ComponentFixture<AllLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
