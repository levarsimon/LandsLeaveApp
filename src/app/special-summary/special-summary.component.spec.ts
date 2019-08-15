import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialSummaryComponent } from './special-summary.component';

describe('SpecialSummaryComponent', () => {
  let component: SpecialSummaryComponent;
  let fixture: ComponentFixture<SpecialSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecialSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
