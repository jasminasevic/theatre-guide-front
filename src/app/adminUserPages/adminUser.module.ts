import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { adminUserRoutes } from './adminUser.routing';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(adminUserRoutes)
  ],
  declarations: [
    EditProfileComponent
  ]
})
export class AdminUserModule { }
