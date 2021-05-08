import { Routes, RouterModule } from '@angular/router';
import { AllPurchasesResolverService } from './purchases/all-purchases/all-purchases-resolver.service';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AllPurchasesComponent } from './purchases/all-purchases/all-purchases.component';

export const adminUserRoutes: Routes = [
  {
    path: 'settings',
    component: EditProfileComponent
  },
  {
    path: 'reservations',
    component: AllPurchasesComponent,
    resolve: { purchaseList: AllPurchasesResolverService }
  }
];

