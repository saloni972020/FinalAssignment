import { PersonalModule } from './personal/personal.module';
import { FormsModule } from '@angular/forms';
import { HttpPostService } from './public/http-post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PublicModule} from './public/public.module'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { from } from 'rxjs';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PublicModule,
    FormsModule,
    PersonalModule,
    AppRoutingModule
  ],
  providers: [HttpPostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
