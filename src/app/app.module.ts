import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ApplyComponent } from './apply/apply.component';

import { ApplyRoutingModule } from './apply/app-routing.module';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { TimeoffFormComponent } from './timeoff-form/timeoff-form.component';
import { ResumptionFormComponent } from './resumption-form/resumption-form.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

import {AuthService} from './services/auth-service.service';
import { StaffPageComponent } from './staff-page/staff-page.component';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarComponent } from './calendar/calendar.component';

import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { HistorySummaryComponent } from './history-summary/history-summary.component';
import { AnnualSummaryComponent } from './annual-summary/annual-summary.component';
import { SickSummaryComponent } from './sick-summary/sick-summary.component';
import { NopaySummaryComponent } from './nopay-summary/nopay-summary.component';
import { SpecialSummaryComponent } from './special-summary/special-summary.component';
import { StudySummaryComponent } from './study-summary/study-summary.component';

import {HistoryRoutingModule} from './leave-history/app-routing.module';
import { StaffByNameComponent } from './staff-by-name/staff-by-name.component';
import { StaffBySubdivisionComponent } from './staff-by-subdivision/staff-by-subdivision.component';
import { StaffByDivisionComponent } from './staff-by-division/staff-by-division.component';

import {StaffRoutingModule} from './staff-page/app-routing.module';
import { MessagesComponent } from './messages/messages.component';
import { AppModalComponent } from './messages/modal.component';

import { NgxsModule } from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import {NgxsLoggerPluginModule} from '@ngxs/logger-plugin';
import {NgxsStoragePluginModule} from '@ngxs/storage-plugin';

import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthState } from './states/auth-state';
import { AuthGuard } from './services/auth-guard.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/token.interceptor';


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
    StaffPageComponent,
    CalendarComponent,
    AppComponent,
    HistorySummaryComponent,
    AnnualSummaryComponent,
    SickSummaryComponent,
    NopaySummaryComponent,
    SpecialSummaryComponent,
    StudySummaryComponent,
    StaffByNameComponent,
    StaffBySubdivisionComponent,
    StaffByDivisionComponent,
    MessagesComponent,
    RegisterComponent,
    AppModalComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([AuthState]),
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ApplyRoutingModule,    
    HistoryRoutingModule,
    StaffRoutingModule,
    CommonModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
     provide: DateAdapter,
     useFactory: adapterFactory
   },
 ),
 NgxsStoragePluginModule.forRoot({
  key: 'auth.token'
    }),
 NgxsReduxDevtoolsPluginModule.forRoot(),
 NgxsLoggerPluginModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }