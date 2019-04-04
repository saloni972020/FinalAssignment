import { PastBookingComponent } from './past-booking/past-booking.component';
import { PendingBookingComponent } from './pending-booking/pending-booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { FaqComponent } from './faq/faq.component';
import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AuthGuard } from '../AuthGuard/auth-guard.guard';
const routes: Routes = [ 
  { path: 'navbar', 
  component: NavbarComponent, 
  canActivate:[AuthGuard],
  children: [ 
  { path: 'profile', component: ProfileComponent} , 
  { path: 'faqs', component: FaqComponent} , 
  { path: 'mybookings', component: MyBookingsComponent,
  children: [ 
    { path: 'pending', component: PendingBookingComponent} , 
    { path: 'past', component: PastBookingComponent} , 
  ]
  



} 
  ] 
  } 
  ]; 

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class PersonalRoutingModule { }
