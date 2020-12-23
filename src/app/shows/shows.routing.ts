import { Routes } from '@angular/router';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { AboutShowComponent } from './about-show/about-show.component';
import { ShowResolverService } from './about-show/show-resolver.service';

export const ShowsRoutes: Routes = [
  {  
    path: 'all-shows',
    component: AllShowsComponent
  },
  {
    path: 'about-show/:id',
    component: AboutShowComponent,
    resolve: { show: ShowResolverService }
  }
];