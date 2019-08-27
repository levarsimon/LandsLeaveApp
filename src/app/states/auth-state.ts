import {State,Selector,Action,StateContext} from '../../../node_modules/@ngxs/store'
import {AuthService} from '../services/auth-service.service';
import {Signin, Signout} from './auth-actions';
import { tap } from 'rxjs/operators';
import { GetUser } from './user-actions';


// Auth State Model
export class AuthStateModel {
  // if you have an extra token like authorization, you can add it here plus any other user information you might want to store
  token?: string;
  authorization?: string;
  id?:number;
}

@State<AuthStateModel>({
  name: 'auth' // the name of our state
})
export class AuthState {
  @Selector()
  static token(state: AuthStateModel) {
    return state.token;
  }

  @Selector()
  static id(state: AuthStateModel) {
    return state.id;
  }

  constructor(private authService: AuthService) {}

  @Action(Signin)
  login(
    { patchState, dispatch, getState}: StateContext<AuthStateModel>,
    {payload}: Signin
  ) {
    return this.authService.signin(payload).pipe(
      tap(result => {
        patchState({
          token: result.token, id:result.empId, authorization: result.emptype
        });

        const state= getState();
        dispatch(new GetUser(state.id))
      })
    );
  }

  @Action(Signout)
  logout({ setState, getState }: StateContext<AuthStateModel>) {
    const { token } = getState();
    return this.authService.signout().pipe(
      tap(()=> {
        setState({});
      })
    );
  }

}