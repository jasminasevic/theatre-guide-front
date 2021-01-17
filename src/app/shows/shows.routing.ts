import { Routes } from '@angular/router';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { AboutShowComponent } from './about-show/about-show.component';
import { AboutShowResolverService } from './about-show/about-show-resolver.service';
import { AllShowsResolverService } from './all-shows/all-shows-resolver.service';

export const ShowsRoutes: Routes = [
  {  
    path: 'all-shows',
    component: AllShowsComponent,
    resolve: { showList: AllShowsResolverService }
  },
  {
    path: 'about-show/:id',
    component: AboutShowComponent,
    resolve: { show: AboutShowResolverService }
  }
];