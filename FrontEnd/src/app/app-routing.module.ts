import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NeedAuthGuard} from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BloodAvailabilityPageComponent} from './blood-availability-page/blood-availability-page.component';
import { BloodAvailabilityPageAnegComponent } from './blood-availability-page/blood-availability-page-aneg/blood-availability-page-aneg.component';
import { BloodAvailabilityPageBposComponent } from './blood-availability-page/blood-availability-page-bpos/blood-availability-page-bpos.component';
import { BloodAvailabilityPageBnegComponent } from './blood-availability-page/blood-availability-page-bneg/blood-availability-page-bneg.component';
import { BloodAvailabilityPageOposComponent } from './blood-availability-page/blood-availability-page-opos/blood-availability-page-opos.component';
import { BloodAvailabilityPageOnegComponent } from './blood-availability-page/blood-availability-page-oneg/blood-availability-page-oneg.component';
import { BloodAvailabilityPageAbposComponent } from './blood-availability-page/blood-availability-page-abpos/blood-availability-page-abpos.component';
import { BloodAvailabilityPageAbnegComponent } from './blood-availability-page/blood-availability-page-abneg/blood-availability-page-abneg.component';
const routes: Routes = [
{path: '', component:HomePageComponent},
{path: 'homepage', component:HomePageComponent},
{path: 'login',component: LoginPageComponent},
{path: 'register', component: SignupPageComponent},
{path: 'dashboard',component: DashboardComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page',component: BloodAvailabilityPageComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-aneg',component: BloodAvailabilityPageAnegComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-bpos',component: BloodAvailabilityPageBposComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-bneg',component: BloodAvailabilityPageBnegComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-opos',component: BloodAvailabilityPageOposComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-oneg',component: BloodAvailabilityPageOnegComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-abpos',component: BloodAvailabilityPageAbposComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page-abneg',component: BloodAvailabilityPageAbnegComponent,canActivate: [NeedAuthGuard]}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
