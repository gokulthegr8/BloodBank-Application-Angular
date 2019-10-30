import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import {NeedAuthGuard} from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
{path: '', component:HomePageComponent},
{path: 'homepage', component:HomePageComponent},
{path: 'login',component: LoginPageComponent},
{path: 'register', component: SignupPageComponent},
{path: 'dashboard',component: DashboardComponent,canActivate: [NeedAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
