import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ShowsModule } from './shows/shows.module';
import { AdminTheatreRoutes } from './adminTheatre.routing';
import { TheatreDashboardComponent } from './dashboard/dashboard.component';
import { ScenesModule } from './scenes/scenes.module';
import { RepertoiresModule } from './repertoire/repertoires.module';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AllPurchasesComponent } from './purchases/all-purchases/all-purchases.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminTheatreRoutes),
    ShowsModule,
    ScenesModule,
    RepertoiresModule
  ],
  declarations: [
    TheatreDashboardComponent,
    EditProfileComponent,
    AllPurchasesComponent
  ]
})
export class AdminTheatreModule { }
