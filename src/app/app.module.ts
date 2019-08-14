import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ApplyRoutingModule } from './apply/app-routing.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { AppComponent } from './app.component';
import { ApplyComponent } from './apply/apply.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { TimeoffFormComponent } from './timeoff-form/timeoff-form.component';
import { ResumptionFormComponent } from './resumption-form/resumption-form.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';
import { CalendarComponent } from './calendar/calendar.component';
import { StaffInformationComponent } from './staff-information/staff-information.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    HomeComponent,
    ProfileComponent,
    ApplyComponent,
    LeaveFormComponent,
    TimeoffFormComponent,
    ResumptionFormComponent,
    LeaveHistoryComponent,
    LeaveRequestComponent,
    CalendarComponent,
    StaffInformationComponent,
    EmployeeListComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ApplyRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
 exports: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
