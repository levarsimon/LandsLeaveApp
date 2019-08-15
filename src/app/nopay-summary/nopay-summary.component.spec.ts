import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NopaySummaryComponent } from './nopay-summary.component';

describe('NopaySummaryComponent', () => {
  let component: NopaySummaryComponent;
  let fixture: ComponentFixture<NopaySummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NopaySummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NopaySummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
