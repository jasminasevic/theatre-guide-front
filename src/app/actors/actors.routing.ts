import { Routes } from '@angular/router';
import { AboutActorComponent } from './about-actor/about-actor.component';
import { AllActorsComponent } from './all-actors/all-actors.component';
import { ActorResolverService } from './about-actor/actor-resolver.service';

export const ActorsRoutes: Routes = [
  { 
    path: 'all-actors',
    component: AllActorsComponent
  },
  {
    path: 'about-actor/:id',
    component: AboutActorComponent,
    resolve: { actor: ActorResolverService }
  }
];
