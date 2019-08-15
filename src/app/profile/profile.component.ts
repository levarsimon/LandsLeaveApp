import { Component, OnInit } from '@angular/core';
import { User } from '../models/UserModel';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User;

  constructor(private data: UserService) { }

  ngOnInit() {
    this.data.currentUser.subscribe(user => this.user=user);
  }
}