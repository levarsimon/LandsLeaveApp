import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import { AppStaffBySubdivisionModalComponent } from './modal.component';

@Component({
  selector: 'app-staff-by-subdivision',
  templateUrl: './staff-by-subdivision.component.html',
  styleUrls: ['./staff-by-subdivision.component.scss']
})
export class StaffBySubdivisionComponent implements OnInit {

  @ViewChild(AppStaffBySubdivisionModalComponent, {static: true}) modal: AppStaffBySubdivisionModalComponent;

  searchForm: FormGroup;

  constructor() { }

  submit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.searchForm.reset();
    }
  }

  resetForm() {
    this.searchForm.reset();
  }

  ngOnInit() {
  }

}
