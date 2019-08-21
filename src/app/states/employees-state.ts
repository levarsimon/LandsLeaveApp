import {State, Selector, Action, StateContext} from '@ngxs/store';
import {User} from '../models/UserModel';
import { GetEmployees } from './employees-action';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';

export interface EmployeesStateModel{
  users: User[];
}

@State<EmployeesStateModel>({
  name:'employees'
})

export class EmployeesState{

  constructor(private userService: UserService){
    
  }

  @Selector()
  static users(state:EmployeesStateModel){
    return state.users;
  }

  @Action(GetEmployees)
  getEmployees({getState, setState}:StateContext<EmployeesStateModel>){
    return this.userService.getUsers().pipe(tap(result => {
      const state= getState();
      setState({
        ...state,
        users: result
      });
    }));
  }

}