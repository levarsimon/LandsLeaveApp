import { Routes } from '@angular/router';
import {HistorySummaryComponent} from '../history-summary/history-summary.component';
import {SickSummaryComponent} from '../sick-summary/sick-summary.component';
import {SpecialSummaryComponent} from '../special-summary/special-summary.component';
import {NopaySummaryComponent} from '../nopay-summary/nopay-summary.component';
import {StudySummaryComponent} from '../study-summary/study-summary.component';
import {LeaveHistoryComponent} from './leave-history.component';
import {AnnualSummaryComponent} from '../annual-summary/annual-summary.component';

export const historyRoutes: Routes = [
  {
    path: 'history',
    component: LeaveHistoryComponent,
    children: [
      { path: '', redirectTo: 'summary', pathMatch: 'full' },
      { path: 'summary', component:HistorySummaryComponent },
      { path: 'annual', component: AnnualSummaryComponent},
      { path: 'sick', component: SickSummaryComponent},
      { path: 'nopay', component: NopaySummaryComponent},
      { path: 'special', component: SpecialSummaryComponent},
      { path: 'study', component: StudySummaryComponent},
    ]
  }
];