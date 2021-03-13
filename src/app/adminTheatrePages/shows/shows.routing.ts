import { Routes } from '@angular/router';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { EditShowComponent } from './edit-show/edit-show.component';
import { AddShowComponent } from './add-show/add-show.component';
import { AllShowsResolverService } from './all-shows/all-shows-resolver.service';

export const ShowRoutes: Routes = [
  {  
    path: 'all-shows',
    component: AllShowsComponent,
    resolve: { showList: AllShowsResolverService }
  },
  {
    path: 'add-show',
    component: AddShowComponent
  },
  {
    path: 'edit-show/:id',
    component: EditShowComponent
  }
];
