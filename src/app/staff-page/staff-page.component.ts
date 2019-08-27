import { Component, OnInit } from '@angular/core';
import { GetEmployees } from '../states/employees-action';
import { Store, Select } from '@ngxs/store';
import { EmployeesState } from '../states/employees-state';
import { User } from '../models/UserModel';

@Component({
  selector: 'app-staff-page',
  templateUrl: './staff-page.component.html',
  styleUrls: ['./staff-page.component.scss']
})
export class StaffPageComponent implements OnInit {


  constructor(private store : Store) {

   }

  ngOnInit() {
      this.store.dispatch(new GetEmployees());
  }
}