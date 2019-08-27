import { User } from '../models/UserModel';

export class GetUser{
  static readonly type= '[User API] GetUser';
  constructor(public id : number){}
}

export class DeleteUser{
  static readonly type='[User Api] DeleteUser';

  constructor (public id: number){

  }
}


export class UpdateUser{
  static readonly type='[User Api] UpdateUser';

  constructor(public id: number, public user:User){

  }
}