import { Routes } from '@angular/router';

import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ComingSoonComponent } from './ComingSoon/ComingSoon.component';
import { BusinessSignUpComponent } from './BusinessSignUp/BusinessSignUp.component';

export const AuthRoutes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full',
},{
  path: '',
  children: [{
    path: 'login',
    component: LoginComponent
  }, {
    path: 'sign-up',
    component: SignUpComponent
  }, {
    path: 'business-sign-up',
    component: BusinessSignUpComponent
  }, {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  }, {
    path: 'coming-soon',
    component: ComingSoonComponent
  }]
}];
