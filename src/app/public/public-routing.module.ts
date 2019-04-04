import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [ 
  { path:'register', component: SignUpComponent}, 
  { path: 'login', component: LoginComponent }, 
  { path:'', redirectTo: 'register', pathMatch: 'full'} 
  
  ]; 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
