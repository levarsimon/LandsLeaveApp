import { Component, OnInit } from '@angular/core';
import {User} from '../models/UserModel'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  Employee: User;
  
  constructor() { }

  ngOnInit() {
  }

}
