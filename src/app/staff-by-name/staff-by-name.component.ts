import { Component, OnInit } from '@angular/core';
import { EmployeesState } from '../states/employees-state';
import { Select } from '@ngxs/store';
import { User } from '../models/UserModel';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-staff-by-name',
  templateUrl: './staff-by-name.component.html',
  styleUrls: ['./staff-by-name.component.scss']
})
export class StaffByNameComponent implements OnInit {
  
  @Select(EmployeesState) employees$: Observable<User[]>;

  employees:Observable<User[]>;

  constructor() { }

  
  ngOnInit() {
  }

  getSubdivisionEmployees(id:number){
    this.employees= this.employees$.pipe(map(employees$ => employees$.filter(employees$ => employees$.subdiv.subDivId=id)));
  }

}
