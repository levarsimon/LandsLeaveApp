import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Store} from '@ngxs/store';
import {AuthState} from '../states/auth-state';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {

    if(localStorage.getItem('currentUser')) {
      return true;
    }

    this.router.navigate(['/login'], { queryParams: { returnUrl:state.url }});

  }
}