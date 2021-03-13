import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShowRoutes } from './shows.routing';
import { AddShowComponent } from './add-show/add-show.component';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { EditShowComponent } from './edit-show/edit-show.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ShowRoutes),
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [
    AddShowComponent,
    AllShowsComponent,
    EditShowComponent
  ]
})
export class ShowsModule { }
