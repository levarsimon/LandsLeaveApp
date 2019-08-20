import {State,Selector,Action,StateContext} from '../../../node_modules/@ngxs/store'
import {AuthService} from '../services/auth-service.service';
import {Signin, Signout} from './auth-actions';
import { tap } from 'rxjs/operators';


// Auth State Model
export class AuthStateModel {
  // if you have an extra token like authorization, you can add it here plus any other user information you might want to store
  token?: string;
  email?: string;
  name?: string;
  refreshToken?: any;
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
  static userDetails(state: AuthStateModel) {
    return {
      name: state.name,
      email: state.email
    };
  }

  @Selector()
  static refreshToken(state: AuthStateModel) {
    return state.refreshToken;
  }

  constructor(private authService: AuthService) {}

  @Action(Signin)
  login(
    { patchState }: StateContext<AuthStateModel>,
    credentials: Signin
  ) {
    return this.authService.signin(credentials).pipe(
      tap(result => {
        patchState({
      
        });
      })
    );
  }

  @Action(Signout)
  logout({ setState, getState }: StateContext<AuthStateModel>) {
    const { token } = getState();
    return this.authService.signout().pipe(
      tap(_ => {
        setState({});
      })
    );
  }

}