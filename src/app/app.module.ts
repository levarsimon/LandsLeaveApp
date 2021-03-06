import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyRoutingModule } from './apply/app-routing.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ApplyComponent } from './apply/apply.component';
import { LeaveFormComponent } from './leave-form/leave-form.component';
import { TimeoffFormComponent } from './timeoff-form/timeoff-form.component';
import { ResumptionFormComponent } from './resumption-form/resumption-form.component';
import { LeaveHistoryComponent } from './leave-history/leave-history.component';
import { LeaveRequestComponent } from './leave-request/leave-request.component';

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
    LeaveRequestComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ApplyRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
