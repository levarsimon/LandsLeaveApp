import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { staffRoutes } from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(staffRoutes),

  ],
  exports:[
    RouterModule
  ]
})
export class StaffRoutingModule { }