import {State, Action, Selector, StateContext} from '@ngxs/store';
import {User} from '../models/UserModel';
import { GetUser, DeleteUser } from './user-actions';
import { tap } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

export interface UserStateModel{
  user: User;
}

@State<UserStateModel>({
  name:'user'
})

export class UserState{

  constructor(private userService:UserService){

  }
@Selector()
static user(state:UserStateModel){
  return state.user;
}

@Action(GetUser)
getUser({patchState}:StateContext<UserStateModel>,{id}:GetUser){
  console.log(id)
  return this.userService.getUser(id).pipe(tap(result => {
    patchState({
      user: result
    });
  }));
}

@Action(DeleteUser)
deleteUser({getState, setState}:StateContext<UserStateModel>, {id}: DeleteUser){
  return this.userService.deleteUser(id).pipe(tap(result=>
  {
    const state=getState();
    setState({
      ...state,
      user:null
    });
  }));
}


}