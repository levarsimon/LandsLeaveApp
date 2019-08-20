import {Division} from './Division';
import {Subdivision} from './Subdivision';

export class Leave{
  id:number;
  type:number;
  reason:string;
  startDate:Date;
  endDate:Date;
  employeeId:number;
  employeeName:string;
  employeeSubdivision:Subdivision;
  employeeDivision:Division;
  supervisorApproved:boolean;
  managerApproved:boolean;
  hrVerified:boolean;
  Comments:string;
  createdOn: Date;
  createdBy: string;
  modifiedOn: Date;
  modifiedBy:string;

constructor(id,type,reason,startDate,endDate,supervisorApproved,managerApproved,
  hrVerified,Comments){

}
  toJson():any{
    return{
      LevId:this.id,
      Type:this.type,
      Reason:this.reason,
      StartDate:this.startDate,
      EndDate:this.endDate,
      SupApprv:this.supervisorApproved,
      ManagerApprv: this.managerApproved,
      HRVerified: this.hrVerified,
      Comments: this.Comments
    }
  }
}

export class LeaveAdapter{
  adapt(item:any):Leave{
    return new Leave(
      item.LevId,
      item.Type,
      item.Reason,
      new Date(item.StartDate),
      new Date(item.EndDate),
      item.SupApprv,
      item.ManagerApprv,
      item.HRVerified,
      item.Comments
    );
  }
}

export class SickLeave{
  id:number;
  leaveId: number;
  medicalApproved:boolean;
  NISSent: boolean;
  NISReceived: boolean;
}