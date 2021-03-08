import { Routes } from '@angular/router';
import { AdminPanelLayoutComponent } from './layouts/adminPanel/AdminPanelLayout.component';
import { FrontendPanelLayoutComponent } from './layouts/frontendPanel/FrontendPanel.component';
import { AdminTheatreLayoutPanelComponent } from './layouts/adminTheatrePanel/adminTheatrePanel.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PartnershipsComponent } from './partnerships/partnerships.component';
import { AuthGuardService } from './guards/auth-guard.service';
import { AuthTheatreGuardService } from './guards/auth-theatre-guard.service';

export const AppRoutes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full',
}, {
  path: '',
  component: FrontendPanelLayoutComponent,
  children: [{
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'actors',
    loadChildren: () => import('./actors/actors.module').then(m => m.ActorsModule)
  },
  {
    path: 'business-partnerships',
    component: PartnershipsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'directors',
    loadChildren: () => import('./directors/directors.module').then(m => m.DirectorsModule)
  },
  {
    path: 'repertoires',
    loadChildren: () => import('./repertoires/repertoires.module').then(m => m.RepertoiresModule)
  },
  {
    path: 'shows',
    loadChildren: () => import('./shows/shows.module').then(m => m.ShowsModule)
  },
  {
    path: 'theatres',
    loadChildren: () => import('./theatres/theatres.module').then(m => m.TheatresModule)
  },
  {
    path: 'listing',
    loadChildren: () => import('./listing/listing.module').then(m => m.ListingModule)
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  }]
}, 
{
  path: 'admin',
  component: AdminPanelLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => import('./adminPages/admin.module').then(m => m.AdminModule)
  }],
  canActivate: [AuthGuardService]
},
{
  path: 'admin-theatre',
  component: AdminTheatreLayoutPanelComponent,
  children: [{
    path: '',
    loadChildren: () => import('./adminTheatrePages/adminTheatre.module').then(m => m.AdminTheatreModule)
  }],
  canActivate: [AuthTheatreGuardService]
},
{
  path: '',
  component: AuthLayoutComponent,
  children: [{
    path: '',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthModule)
  }]
}
];
