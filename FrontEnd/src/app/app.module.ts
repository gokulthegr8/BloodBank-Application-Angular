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
import { BloodAvailabilityPageBposComponent } from './blood-availability-page/blood-availability-page-bpos/blood-availability-page-bpos.component';
import { BloodAvailabilityPageBnegComponent } from './blood-availability-page/blood-availability-page-bneg/blood-availability-page-bneg.component';
import { BloodAvailabilityPageOposComponent } from './blood-availability-page/blood-availability-page-opos/blood-availability-page-opos.component';
import { BloodAvailabilityPageOnegComponent } from './blood-availability-page/blood-availability-page-oneg/blood-availability-page-oneg.component';
import { BloodAvailabilityPageAbposComponent } from './blood-availability-page/blood-availability-page-abpos/blood-availability-page-abpos.component';
import { BloodAvailabilityPageAbnegComponent } from './blood-availability-page/blood-availability-page-abneg/blood-availability-page-abneg.component';
import { BloodAvailabilityPageAnegComponent } from './blood-availability-page/blood-availability-page-aneg/blood-availability-page-aneg.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    LoginPageComponent,
    SignupPageComponent,
    DashboardComponent,
    BloodAvailabilityPageComponent,
    BloodAvailabilityPageBposComponent,
    BloodAvailabilityPageBnegComponent,
    BloodAvailabilityPageOposComponent,
    BloodAvailabilityPageOnegComponent,
    BloodAvailabilityPageAbposComponent,
    BloodAvailabilityPageAbnegComponent,
    BloodAvailabilityPageAnegComponent,
    CartComponent
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
