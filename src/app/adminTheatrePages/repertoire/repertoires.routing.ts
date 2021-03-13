import { Routes } from '@angular/router';
import { AllRepertoiresComponent } from './all-repertoires/all-repertoires.component';
import { AddRepertoireComponent } from './add-repertoire/add-repertoire.component';
import { EditRepertoireComponent } from './edit-repertoire/edit-repertoire.component';

export const RepertoiresRoutes: Routes = [
  { 
    path: 'all-repertoires',
    component: AllRepertoiresComponent
  },
  {
    path: 'add-repertoire',
    component: AddRepertoireComponent
  },
  {
    path: 'edit-repertoire/:id',
    component: EditRepertoireComponent
  }
];
