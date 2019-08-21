import { Injectable } from '@angular/core';

export class Login{
  authorization?:string;
  userId?:number;
  token?: string;

  constructor(userType,userId,token){
    this.authorization=userType;
    this.userId=userId;
    this.token=token;
  }
}

@Injectable({
  providedIn:'root'
})
export class LoginAdapter{

  adapt(item:any):Login{
    return new Login(
      item.EMPType,
      item.EmpId,
      item.Token
    );
  }
}