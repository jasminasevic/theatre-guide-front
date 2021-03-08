import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminTheatreRoutes } from './adminTheatre.routing';
import { TheatreDashboardComponent } from './dashboard/dashboard.component';
import { ActorsComponent } from './actors/actors.component';
import { DirectorsComponent } from './directors/directors.component';
import { ProfileComponent } from './profile/profile.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { ScenesComponent } from './scenes/scenes.component';
import { ShowsComponent } from './shows/shows.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminTheatreRoutes),
  ],
  declarations: [
    ActorsComponent,
    DirectorsComponent,
    ProfileComponent,
    RepertoireComponent,
    ScenesComponent,
    ShowsComponent,
    TheatreDashboardComponent]
})
export class AdminTheatreModule { }
