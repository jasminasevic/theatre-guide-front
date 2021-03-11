import { Routes } from '@angular/router';
import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';

export const TheatreRoutes: Routes = [
  { 
    path: '/edit-theatre/:id',
    component: EditTheatreComponent
  }
];

