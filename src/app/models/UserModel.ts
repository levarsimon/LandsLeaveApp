export class User{
  id: number;
  subdivisionID: number;
  firstName: string;
  lastName:string;
  jobTitle:string;
  employeeType:string;
  employeeBand:number;
  onLeave:boolean;
  annualLeft:number;
  sickLeft:number;
  uncertifiedSickLeft:number;
  specialLeft: number;
  emergencySpecialLeft: number;
  conferencesSpecialLeft:number;
  meetingSpecialLeft:number;
  activitiesSpecialLeft: number;
  dOB= new Date(0,0,0);
  createdOn= new Date(0,0,0,0,0);
  createdBy:string;
  modifiedOn= new Date(0,0,0,0,0);
  modifiedBy:string;
}
