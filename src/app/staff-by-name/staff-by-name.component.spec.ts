import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffByNameComponent } from './staff-by-name.component';

describe('StaffByNameComponent', () => {
  let component: StaffByNameComponent;
  let fixture: ComponentFixture<StaffByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
