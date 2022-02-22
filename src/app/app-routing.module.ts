import { StatisticsComponent } from './statistics/statistics.component';
import { FairnesscalculatorComponent } from './fairnesscalculator/fairnesscalculator.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AddfriendsComponent } from './addfriends/addfriends.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddexpenseComponent } from './addexpense/addexpense.component';
import { GroupdetailsComponent } from './groupdetails/groupdetails.component';

const routes: Routes = [
  {path: '', redirectTo : 'login', pathMatch : 'full'},
  {path : 'homepage', component : HomepageComponent},
  {path : 'dashboard', component : DashboardComponent},
  {path : 'groupdetails/:id', component : GroupdetailsComponent},
  {path : 'login', component : LoginComponent},
  {path : 'signup', component : SignupComponent},
  {path : 'addfriends', component : AddfriendsComponent},
  {path : 'addexpense', component : AddexpenseComponent},
  {path : 'fairnesscalculator', component : FairnesscalculatorComponent},
  {path : 'statistics', component : StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


