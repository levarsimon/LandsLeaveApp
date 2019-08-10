export class Leave{
  id:number;
  type:string;
  reason:string;
  supervisorApproval:boolean;
  managerApproval:boolean;
  hrVerification:boolean;
  startDate:Date;
  endDate:Date;
  Comments:string;
  createdOn: Date;
  createdBy: string;
  modifiedOn: Date;
  modifiedBy:string;
}

export class SickLeave extends Leave{
  medicalApproved:boolean;
  NISSent: boolean;
  NISReceived: boolean;
}
