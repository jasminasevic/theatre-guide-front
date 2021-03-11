import { Routes } from '@angular/router';
import { AllShowsComponent } from './all-shows/all-shows.component';
import { EditShowComponent } from './edit-show/edit-show.component';
import { AddShowComponent } from './add-show/add-show.component';

export const ShowRoutes: Routes = [
  {  
    path: 'all-shows',
    component: AllShowsComponent
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
