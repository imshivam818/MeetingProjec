import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalenderComponent } from './calender/calender.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SignupComponent } from './signup/signup.component';
import { TeamsComponent } from './teams/teams.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'nav',component:NavComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'signup',component:SignupComponent},
  {path:'teams',component:TeamsComponent},
  {path:'home',component:HomeComponent},
  {path:'calender',component:CalenderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
