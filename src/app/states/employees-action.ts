import {User} from '../models/UserModel';

export class GetEmployees{

  static readonly type='[Staff Page] GetEmployees';

  constructor(public employees: User[]){

  }
}