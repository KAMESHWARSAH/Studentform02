import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { AdminComponent } from './admin/admin.component';
import { ForgotComponent } from './forgot/forgot.component';
import { OtpverificationComponent } from './otpverification/otpverification.component';
import { NewpasswordComponent } from './newpassword/newpassword.component';

const routes: Routes = [
  {
    path:'',component:HomeComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'signin',component:SigninComponent
  },
  {
    path:'admin',component:AdminComponent
  },
  {
    path:'forgot',component:ForgotComponent
  },
  
  {
    path:'otpverification',component:OtpverificationComponent
  },
  {
    path:'newpassword',component:NewpasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
