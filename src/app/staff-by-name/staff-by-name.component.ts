import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-staff-by-name',
  templateUrl: './staff-by-name.component.html',
  styleUrls: ['./staff-by-name.component.scss']
})
export class StaffByNameComponent implements OnInit {

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
