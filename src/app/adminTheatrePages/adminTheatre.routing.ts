import { Routes } from '@angular/router';
import { TheatreDashboardComponent } from './dashboard/dashboard.component';
import { ActorsComponent } from './actors/actors.component';
import { DirectorsComponent } from './directors/directors.component';
import { ProfileComponent } from './profile/profile.component';
import { RepertoireComponent } from './repertoire/repertoire.component';
import { ScenesComponent } from './scenes/scenes.component';
import { ShowsComponent } from './shows/shows.component';

export const AdminTheatreRoutes: Routes = [
  {
    path: 'dashboard',
    component: TheatreDashboardComponent
  },
  {
    path: 'actors',
    component: ActorsComponent
  },
  {
    path: 'directors',
    component: DirectorsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'repertoire',
    component: RepertoireComponent
  },
  {
    path: 'scenes',
    component: ScenesComponent
  },
  {
    path: 'shows',
    component: ShowsComponent
  }
]
