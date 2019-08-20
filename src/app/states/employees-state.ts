import {State} from '@ngxs/store';
import {User} from '../models/UserModel';

export interface EmployeesStateModel{
  users: User[];
}

@State<EmployeesStateModel>({
  name:'employees'
})

export class EmployeesState{

}