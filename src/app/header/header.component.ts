import { Component, OnInit } from '@angular/core';
import {User} from '../models/UserModel';
import { Store } from '@ngxs/store';
import { Signout } from '../states/auth-actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Employee: User;
  
  constructor(private store: Store) { }

  logout(){
    this.store.dispatch(new Signout);
  }

  ngOnInit() {
  }

}
