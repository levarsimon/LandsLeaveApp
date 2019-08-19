import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-staff-by-division',
  templateUrl: './staff-by-division.component.html',
  styleUrls: ['./staff-by-division.component.scss']
})
export class StaffByDivisionComponent implements OnInit {

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
