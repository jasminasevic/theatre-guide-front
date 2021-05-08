import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { adminUserRoutes } from './adminUser.routing';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AllPurchasesComponent } from './purchases/all-purchases/all-purchases.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule,
    RouterModule.forChild(adminUserRoutes)
  ],
  declarations: [
    EditProfileComponent,
    AllPurchasesComponent
  ]
})
export class AdminUserModule { }
