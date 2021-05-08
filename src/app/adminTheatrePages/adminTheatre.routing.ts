import { Routes } from '@angular/router';
import { TheatreDashboardComponent } from './dashboard/dashboard.component';
import { EditProfileComponent } from './profile/edit-profile/edit-profile.component';
import { EditTheatreComponent } from './theatre/edit-theatre/edit-theatre.component';
import { AllPurchasesComponent } from './purchases/all-purchases/all-purchases.component';
import { AllPurchasesResolverService } from './purchases/all-purchases/all-purchases-resolver.service';
import { DashboardResolverService } from './dashboard/dashboard-resolver.service';
export const AdminTheatreRoutes: Routes = [
  {
    path: 'dashboard',
    component: TheatreDashboardComponent,
    resolve: { data: DashboardResolverService }
  },
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
    path: 'repertoire',
    loadChildren: () => import('./repertoire/repertoires.module').then(m => m.RepertoiresModule)
  },
  {
    path: 'scenes',
    loadChildren: () => import('./scenes/scenes.module').then(m => m.ScenesModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule)
  },
  {
    path: 'theatre',
    component: EditTheatreComponent
  }
]
