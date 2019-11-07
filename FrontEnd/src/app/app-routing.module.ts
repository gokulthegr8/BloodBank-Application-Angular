import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NeedAuthGuard} from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BloodAvailabilityPageComponent} from './blood-availability-page/blood-availability-page.component'

const routes: Routes = [
{path: '', component:HomePageComponent},
{path: 'homepage', component:HomePageComponent},
{path: 'login',component: LoginPageComponent},
{path: 'register', component: SignupPageComponent},
{path: 'dashboard',component: DashboardComponent,canActivate: [NeedAuthGuard]},
{path: 'blood-availability-page',component: BloodAvailabilityPageComponent,canActivate: [NeedAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
