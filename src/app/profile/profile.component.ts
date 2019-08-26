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

  user: Observable<User>;
  userLeaveRecord: Observable<leaveTaken>;

  constructor(private store: Store) {
    this.user = this.store.select(UserState => UserState.user);
  }

  ngOnInit() {
    
  } 
}