import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { ContectComponent } from './contect/contect.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';
import { RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SigninComponent,
    ContectComponent,
    AdminComponent,
    ForgotComponent,
    OtpverificationComponent,
    NewpasswordComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
