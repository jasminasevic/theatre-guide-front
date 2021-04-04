import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';

export const adminUserRoutes: Routes = [
  {
    path: 'settings',
    component: EditProfileComponent
  },
];

