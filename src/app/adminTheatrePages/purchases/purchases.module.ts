import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllPurchasesComponent } from './all-purchases/all-purchases.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [AllPurchasesComponent]
})
export class PurchasesModule { }
