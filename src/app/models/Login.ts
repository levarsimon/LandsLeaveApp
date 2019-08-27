import { Injectable } from '@angular/core';

export class Login{
  emptype?:string;
  empId?:number;
  token?: string;

  constructor(userType,userId,token){
    this.emptype=userType;
    this.empId=userId;
    this.token=token;
  }
}

@Injectable({
  providedIn:'root'
})
export class LoginAdapter{

  adapt(item:any):Login{
    return new Login(
      item.emptype,
      item.empId,
      item.token
    );
  }
}