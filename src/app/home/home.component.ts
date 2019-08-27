import { Component, OnInit } from '@angular/core';
import {User} from '../models/UserModel';
import { Store } from '@ngxs/store';
import { GetUser } from '../states/user-actions';
import { AuthState } from '../states/auth-state';
import { UserState } from '../states/user-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {    
  }
}