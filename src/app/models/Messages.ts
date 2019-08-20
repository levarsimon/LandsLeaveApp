export class Message{
  id:number;
  toEmpID:number;
  fromEmpID:number;
  body:string;
  subject:string;
  messageRead:boolean;
  createdOn: Date;
  createdBy: string;
  modifiedOn: Date;
  modifiedBy:string;
}