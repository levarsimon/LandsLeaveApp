import { Component, OnInit, Input } from '@angular/core';
import { User } from '../models/UserModel';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { leaveTaken } from '../models/leaveTaken';
import { UserState } from '../states/user-state';
import { GetUser } from '../states/user-actions';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Select(UserState.user) user$: User;

  constructor() {
    
  }

  ngOnInit() {
    
  } 
}