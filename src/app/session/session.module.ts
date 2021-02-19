import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ComingSoonComponent } from './ComingSoon/ComingSoon.component';
import { BusinessSignUpComponent } from './BusinessSignUp/BusinessSignUp.component';

import { SessionRoutes } from './session.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SessionRoutes),
    SharedModule
  ],
  declarations: [ 
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ComingSoonComponent,
    BusinessSignUpComponent
  ]
})

export class SessionModule {}
