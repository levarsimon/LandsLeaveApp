export class Signin {
  static readonly type = '[Auth] Signin';
  // these are parameters to pass to the action when dispatching it also known as metadata // they work just like normal parameters in normal parameters
  constructor(public payload:{username:string, password:string}) {}
}

export class Signout {
  static readonly type = '[Auth] Signout';
}