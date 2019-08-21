import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Store} from '@ngxs/store';
import {AuthState} from '../states/auth-state';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private store:Store){ }

  canActivate() : boolean {

    const token= this.store.selectSnapshot(AuthState.token);
    return token !==undefined;

  }
}