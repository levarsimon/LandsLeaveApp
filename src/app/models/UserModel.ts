import { Injectable } from '@angular/core';
import { Subdivision } from './Subdivision';

export class User{
  empId: number;
  subDivId: number;
  fname: string;
  lname: string;
  jobTitle: string;
  emptype: string;
  empband: string;
  onLeave: boolean;
  dob: Date;
  email: string;
  password: string;
  token: string;
  code: number;
  userName: string;
  createdOn: Date;
  createdBy: string;
  modifiedOn: Date;
  modifiedBy: string;
  subdiv: Subdivision;

  fullName(): string{
    return this.fname + " " + this.lname;
  }
}