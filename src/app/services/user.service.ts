import { Injectable } from '@angular/core';
import {User} from '../models/UserModel';
import { BehaviorSubject } from '.../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user:User={
    id: 1,
    subdivisionID: 1,
    firstName: "Malik",
    lastName:"Williams",
    jobTitle:"Intern",
    employeeType:"General",
    employeeBand:1,
    onLeave:false,
    annualLeft:30,
    sickLeft:14,
    uncertifiedSickLeft:6,
    specialLeft: 14,
    emergencySpecialLeft: 5,
    conferencesSpecialLeft:5,
    meetingSpecialLeft:5,
    activitiesSpecialLeft: 5,
    dOB: new Date(9,8,2019),
    createdOn: new Date(),
    createdBy: "Malik",
    modifiedOn: new Date(),
    modifiedBy:"Malik"

  };

  private userSource= new BehaviorSubject<User>(this.user);
  currentUser= this.userSource.asObservable();

  getUser():User{
    return this.user;
  }
  constructor() {

   }
}
