import { Routes, RouterModule } from '@angular/router';
import { AllPurchasesResolverService } from './purchases/all-purchases/all-purchases-resolver.service';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { AllPurchasesComponent } from './purchases/all-purchases/all-purchases.component';
import { FollowedShowsComponent } from './followed-shows/followed-shows.component';
import { FollowedShowsResolverService } from '../adminUserPages/followed-shows/followed-shows-resolver.service';

export const adminUserRoutes: Routes = [
  {
    path: 'settings',
    component: EditProfileComponent
  },
  {
    path: 'reservations',
    component: AllPurchasesComponent,
    resolve: { purchaseList: AllPurchasesResolverService }
  },
  {
    path: 'my-followings',
    component: FollowedShowsComponent,
    resolve: { followedShowsList: FollowedShowsResolverService }
  }
];

