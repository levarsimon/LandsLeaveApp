import { Routes } from '@angular/router';

import {HomeComponent} from '../home/home.component';
import {ProfileComponent} from '../profile/profile.component';
import {LoginPageComponent} from '../login-page/login-page.component';
import {LeaveHistoryComponent} from '../leave-history/leave-history.component';
import {LeaveRequestComponent} from '../leave-request/leave-request.component';
import {MessagesComponent} from '../messages/messages.component';

export const routes: Routes = [
  {path: 'home',  component: HomeComponent },
  {path: 'profile', component: ProfileComponent },
  {path: 'login', component: LoginPageComponent },
  {path: 'history', component: LeaveHistoryComponent},
  {path: 'requests', component: LeaveRequestComponent},
  {path:'messages', component: MessagesComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full' }   
];
