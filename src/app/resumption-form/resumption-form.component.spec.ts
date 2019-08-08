import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumptionFormComponent } from './resumption-form.component';

describe('ResumptionFormComponent', () => {
  let component: ResumptionFormComponent;
  let fixture: ComponentFixture<ResumptionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumptionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
