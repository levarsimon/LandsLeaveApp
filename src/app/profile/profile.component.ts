import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserModel';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { leaveTaken } from '../models/leaveTaken';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:Observable<User>;
  userLeaveRecord:Observable<leaveTaken>;

  constructor(private store: Store) {
    this.user = this.store.select(state => state.user.user);
    this.userLeaveRecord= this.store.select(state=> state.takenLeaves.leave);
  }

  ngOnInit() {
    
  } 
}