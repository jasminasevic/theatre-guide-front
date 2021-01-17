import { Routes } from '@angular/router';
import { AllRepertoiresComponent } from './all-repertoires/all-repertoires.component';
import { AboutRepertoireComponent } from './about-repertoire/about-repertoire.component';
import { AllRepertoiresResolverService } from './all-repertoires/all-repertoires-resolver.service';
import { AboutRepertoireResolverService } from './about-repertoire/about-repertoire-resolver.service';

export const RepertoiresRoutes: Routes = [
  { 
    path: 'all-plays',
    component: AllRepertoiresComponent,
    resolve: { repertoireList: AllRepertoiresResolverService}
  },
  {
    path: 'about-play/:id',
    component: AboutRepertoireComponent,
    resolve: { repertoire: AboutRepertoireResolverService }
  }
];

