import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { DatabaseService } from './database.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NeedAuthGuard} from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BloodAvailabilityPageComponent } from './blood-availability-page/blood-availability-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    BloodAvailabilityPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,

  ],
  providers: [DatabaseService,NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
