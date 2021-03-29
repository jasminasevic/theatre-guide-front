import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RepertoiresRoutes } from './repertoires.routing';
import { AllRepertoiresComponent } from './all-repertoires/all-repertoires.component';
import { AddRepertoireComponent } from './add-repertoire/add-repertoire.component';
import { EditRepertoireComponent } from './edit-repertoire/edit-repertoire.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(RepertoiresRoutes),
    SharedModule,
    NgxPaginationModule,
    ConfirmationPopoverModule
  ],
  declarations: [
    AllRepertoiresComponent,
    AddRepertoireComponent,
    EditRepertoireComponent
  ]
})
export class RepertoiresModule { }
