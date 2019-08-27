import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { EmployeesState } from '../states/employees-state';
import { User } from '../models/UserModel';


@Component({
  selector: 'app-staff-by-division',
  templateUrl: './staff-by-division.component.html',
  styleUrls: ['./staff-by-division.component.scss']
})
export class StaffByDivisionComponent implements OnInit {

  //@ViewChild(AppStaffByDivisionModalComponent, {static: true}) modal: AppStaffByDivisionModalComponent;

  @Select(EmployeesState) employees$: User[];
  
  constructor() { }
  
  ngOnInit() {
  }

}

/*submit() {
    if (this.searchForm.valid) {
      console.log(this.searchForm.value);
      this.searchForm.reset();
    }
  }

  resetForm() {
    this.searchForm.reset();
  }*/