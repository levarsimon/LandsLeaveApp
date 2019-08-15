import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { historyRoutes } from './routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(historyRoutes),

  ],
  exports:[
    RouterModule
  ]
})
export class HistoryRoutingModule { }