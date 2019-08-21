import { Routes } from '@angular/router';
import {LeaveFormComponent} from '../leave-form/leave-form.component';
import {TimeoffFormComponent} from  '../timeoff-form/timeoff-form.component';
import {ResumptionFormComponent} from '../resumption-form/resumption-form.component';
import {ApplyComponent} from './apply.component';
import { AuthGuard } from '../services/auth-guard.service';

export const applyRoutes: Routes = [
  {
    path: 'apply',
    component: ApplyComponent,
    children: [
      { path: '', redirectTo: 'leave', pathMatch: 'full' },
      { path: 'leave', component: LeaveFormComponent},
      { path: 'timeoff', component: TimeoffFormComponent},
      { path: 'resumption', component: ResumptionFormComponent},
    ]
  }
];
