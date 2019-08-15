import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBySubdivisionComponent } from './staff-by-subdivision.component';

describe('StaffBySubdivisionComponent', () => {
  let component: StaffBySubdivisionComponent;
  let fixture: ComponentFixture<StaffBySubdivisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBySubdivisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBySubdivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
