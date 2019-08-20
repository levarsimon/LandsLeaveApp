import {User} from '../models/UserModel';

export class GetUser{
  static readonly type= '[User API] GetUser';

  constructor(public user : User){

  }
}