import {State} from '@ngxs/store';
import {User} from '../models/UserModel';

export interface UserStateModel{
  user: User;
}

@State<UserStateModel>({
  name:'user'
})

export class UserState{

}