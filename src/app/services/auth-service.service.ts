import { Injectable } from '@angular/core';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClientModule) {
  }

  login(credentials){
    return true;
  }

  logout(){

  }

  isLoggedIn(){
    return false;
  }
}