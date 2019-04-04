import { AuthGuard } from './../AuthGuard/auth-guard.guard';
import { FaqsGetService } from './faqs-get.service';
import { UpdateService } from './../update.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalRoutingModule } from './personal-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfileComponent } from './profile/profile.component';
import { FaqComponent } from './faq/faq.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { PendingBookingComponent } from './pending-booking/pending-booking.component';
import { PastBookingComponent } from './past-booking/past-booking.component';

@NgModule({
  declarations: [NavbarComponent, ProfileComponent, FaqComponent, MyBookingsComponent, PendingBookingComponent, PastBookingComponent],
  imports: [
    CommonModule,
    PersonalRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports:[
    NavbarComponent,
    ProfileComponent,
    MyBookingsComponent,
    FaqComponent
  ],
  providers:[UpdateService,FaqsGetService,AuthGuard]
})
export class PersonalModule { }
