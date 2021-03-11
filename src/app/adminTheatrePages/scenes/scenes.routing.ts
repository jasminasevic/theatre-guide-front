import { Routes } from '@angular/router';
import { AllScenesComponent } from './all-scenes/all-scenes.component';
import { AddSceneComponent } from './add-scene/add-scene.component';
import { EditSceneComponent } from './edit-scene/edit-scene.component';

export const ScenesRoutes: Routes = [
  { 
    path: 'all-scenes',
    component: AllScenesComponent
  },
  {
    path: 'add-scene',
    component: AddSceneComponent
  },
  {
    path: 'edit-scene/:id',
    component: EditSceneComponent
  }
];