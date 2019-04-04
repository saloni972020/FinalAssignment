import { AuthGuard } from './../AuthGuard/auth-guard.guard';

import { HttpPostService} from './http-post.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { PublicRoutingModule } from './public-routing.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import { HttpGetService } from './http-get.service';

@NgModule({
  declarations: [SignUpComponent, LoginComponent],
  imports: [
    CommonModule,
    PublicRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  exports:[
    LoginComponent,
    SignUpComponent
  ],
  providers: [HttpPostService,HttpGetService,AuthGuard]
})
export class PublicModule { }
