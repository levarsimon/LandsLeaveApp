import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SickSummaryComponent } from './sick-summary.component';

describe('SickSummaryComponent', () => {
  let component: SickSummaryComponent;
  let fixture: ComponentFixture<SickSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SickSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SickSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
