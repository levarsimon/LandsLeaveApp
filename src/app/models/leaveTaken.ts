export class leaveTaken{
  id:number;
  employeeId:number;
  leaveType:number;
  startDate:Date;
  endDate:Date;

  constructor(id,employeeid,leavetypeId,leaveFrom,leaveTo){
    this.id=id;
    this.employeeId=employeeid;
    this.leaveType=leavetypeId;
    this.startDate=leaveFrom;
    this.endDate=leaveTo;
  }
}

export class LeaveTakenAdapter{

  adapt(item:any):leaveTaken{
    return new leaveTaken(
      item.leaveTakenId,
      item.EmpID,
      item.leaveTypeId,
      new Date(item.leaveFrom),
      new Date(item.leaveTo)
    );
  }
}