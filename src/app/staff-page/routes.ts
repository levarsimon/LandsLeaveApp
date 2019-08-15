import { Routes } from '@angular/router';
import {StaffPageComponent} from './staff-page.component';
import {StaffByNameComponent} from '../staff-by-name/staff-by-name.component';
import {StaffByDivisionComponent} from '../staff-by-division/staff-by-division.component';
import {StaffBySubdivisionComponent} from '../staff-by-subdivision/staff-by-subdivision.component';

export const staffRoutes: Routes = [
  {
    path: 'staff',
    component: StaffPageComponent,
    children: [
      { path: '', redirectTo: 'name', pathMatch: 'full' },
      { path: 'name', component: StaffByNameComponent},
      { path: 'subdivision', component: StaffBySubdivisionComponent},
      { path: 'division', component: StaffByDivisionComponent},
    ]
  }
];