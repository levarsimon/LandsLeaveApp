import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { EmployeesState } from '../states/employees-state';
import { User } from '../models/UserModel';

@Component({
  selector: 'app-staff-by-subdivision',
  templateUrl: './staff-by-subdivision.component.html',
  styleUrls: ['./staff-by-subdivision.component.scss']
})
export class StaffBySubdivisionComponent implements OnInit {

  @Select(EmployeesState) employees$: User[];

  constructor() { }

  ngOnInit() {
  }

}