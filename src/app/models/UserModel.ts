export class User{
  id: number;
  firstName: string;
  lastName:string;
  email:string;
  dOB= new Date();
  jobTitle:string;
  employeeType:string;
  employeeBand:number;
  subdivisionID: number;
  subdivisionName: string;
  divisionID:number;
  divisionName: string;
  onLeave:boolean;
  annualLeft:number;
  sickLeft:number;
  uncertifiedSickLeft:number;
  specialLeft: number;
  emergencySpecialLeft: number;
  conferencesSpecialLeft:number;
  meetingSpecialLeft:number;
  activitiesSpecialLeft: number;

constructor(firstName:string,lastName:string,jobTitle:string){
  this.firstName=firstName;
  this.lastName=lastName;
  this.jobTitle=jobTitle;
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
}