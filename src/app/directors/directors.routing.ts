import { Routes, RouterModule } from '@angular/router';
import { AboutDirectorComponent } from './about-director/about-director.component';
import { AllDirectorsComponent } from './all-directors/all-directors.component';
import { DirectorResolverService } from './about-director/director-resolver.service';

export const DirectorsRoutes: Routes = [
  { 
    path: 'all-directors',
    component: AllDirectorsComponent
  },
  {
    path: 'about-director/:id',
    component: AboutDirectorComponent,
    resolve: { director: DirectorResolverService }
  }
];
