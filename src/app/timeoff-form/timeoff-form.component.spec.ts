import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeoffFormComponent } from './timeoff-form.component';

describe('TimeoffFormComponent', () => {
  let component: TimeoffFormComponent;
  let fixture: ComponentFixture<TimeoffFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeoffFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeoffFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
