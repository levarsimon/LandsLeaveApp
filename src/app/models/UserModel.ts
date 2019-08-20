import { Injectable } from '@angular/core';

export class User{
  id: number;
  firstName: string;
  lastName:string;
  email:string;
  dOB:Date;
  jobTitle:string;
  employeeType:string;
  employeeBand:number;
  supervisorId:number;
  subdivisionID: number;
  subdivisionName: string;
  managerId:number;
  divisionID:number;
  divisionName: string;
  onLeave:boolean;
  annualLeft:number;
  sickLeft:number;


  constructor(id,firstName,lastName,email,doB,jobTitle,employeeType,employeeBand,supervisorId,subdivisionID,
              subdivisionName,managerId,divisionID,divisionName,onLeave){
    this.id=id;
    this.firstName=firstName;
    this.lastName=lastName;
    this.email=email;
    this.dOB=doB;
    this.jobTitle=jobTitle;
    this.employeeType=employeeType;
    this.employeeBand=employeeBand;
    this.supervisorId=supervisorId;
    this.subdivisionID=subdivisionID;
    this.subdivisionName=subdivisionName;
    this.managerId=managerId;
    this.divisionID=divisionID;
    this.divisionName=divisionName;
    this.onLeave=onLeave;
  }

  leave():string{
    if(this.onLeave==true){
      return "You are currently on leave."
    }else{
      return "You are currently on duty."
    }
  }

  fullName(): string{
    return this.firstName + " " + this.lastName;
  }


  toJson(): any {
    return {
      EmpID:this.id,
      FName:this.firstName,
      LName:this.lastName,
      email:this.email,
      dob:this.dOB,
      JobTitle:this.jobTitle,
      EMPType:this.employeeType,
      EMPBand:this.employeeBand,
      SubDivId:this.subdivisionID,
      divId:this.divisionID,
      onLeave:this.onLeave
    };
  }
}

@Injectable({
  providedIn:'root'
})
export class UserAdapter{

  adapt(item:any):User{
    return new User(
      item.EmpID,
      item.FName,
      item.LName,
      item.email,
      new Date(item.dob),
      item.JobTitle,
      item.EMPType,
      item.EMPBand,
      item.subDiv.supvrId,
      item.subDiv.SubDivId,
      item.suvDiv.name,
      item.div.mngerId,
      item.div.divId,
      item.div.name,
      item.onLeave
    );
  }
}