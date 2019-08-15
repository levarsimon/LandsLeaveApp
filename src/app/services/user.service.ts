import { Injectable } from '@angular/core';
import {User} from '../models/UserModel';
import { BehaviorSubject } from '.../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    user= new User("Malik","Williams","Developer");

  private userSource= new BehaviorSubject<User>(this.user);
  currentUser= this.userSource.asObservable();

  getUser():User{
    return this.user;
  }
  constructor() {

   }
}