import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowsModule } from './shows/shows.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AdminTheatreRoutes } from './adminTheatre.routing';
import { TheatreDashboardComponent } from './dashboard/dashboard.component';
import { ScenesModule } from './scenes/scenes.module';
import { RepertoiresModule } from './repertoire/repertoires.module';
import { PurchasesModule } from './purchases/purchases.module';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EditTheatreComponent } from './theatre/edit-theatre/edit-theatre.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminTheatreRoutes),
    ShowsModule,
    ScenesModule,
    RepertoiresModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    PurchasesModule,
    SharedModule
  ],
  declarations: [
    TheatreDashboardComponent,
    EditProfileComponent,
    EditTheatreComponent
  ]
})
export class AdminTheatreModule { }
