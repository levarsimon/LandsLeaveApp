import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { applyRoutes } from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(applyRoutes)

  ],
  exports:[
    RouterModule
  ]
})
export class ApplyRoutingModule { }
