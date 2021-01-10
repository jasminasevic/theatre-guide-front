import { Routes } from '@angular/router';
import { AboutTheatreComponent } from './about-theatre/about-theatre.component';
import { AllTheatresComponent } from './all-theatres/all-theatres.component';
import { TheatreResolverService } from './about-theatre/theatre-resolver.service';
import { AllTheatresResolverService } from './all-theatres/all-theatres-resolver.service';

export const TheatresRoutes: Routes = [
  {  
    path: 'all-theatres',
    component: AllTheatresComponent,
    resolve: { theatreList: AllTheatresResolverService}
  },
  {
    path: 'about-theatre/:id',
    component: AboutTheatreComponent,
    resolve: { theatre: TheatreResolverService}
  }
];
