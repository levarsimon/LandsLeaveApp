import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffByDivisionComponent } from './staff-by-division.component';

describe('StaffByDivisionComponent', () => {
  let component: StaffByDivisionComponent;
  let fixture: ComponentFixture<StaffByDivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffByDivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffByDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
