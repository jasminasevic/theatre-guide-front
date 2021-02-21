import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './Login/Login.component';
import { SignUpComponent } from './SignUp/SignUp.component';
import { ForgotPasswordComponent } from './ForgotPassword/ForgotPassword.component';
import { ComingSoonComponent } from './ComingSoon/ComingSoon.component';
import { BusinessSignUpComponent } from './BusinessSignUp/BusinessSignUp.component';

import { AuthRoutes } from './authentication.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(AuthRoutes),
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    LoginComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    ComingSoonComponent,
    BusinessSignUpComponent
  ]
})

export class AuthModule {}
