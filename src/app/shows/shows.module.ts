import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { GlobalModule } from '../globalFrontendComponents/global.module';

import { ShowsRoutes } from './shows.routing';
import { AgmCoreModule } from '@agm/core';

import { AboutShowComponent } from  './about-show/about-show.component';
import { AllShowsComponent } from './all-shows/all-shows.component';

import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
   // Change this to your upload POST address:
    url: 'https://httpbin.org/post',
    maxFilesize: 50,
    acceptedFiles: 'image/*'
  };


@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    DropzoneModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(ShowsRoutes),
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [ 
    AboutShowComponent,
    AllShowsComponent
  ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})

export class ShowsModule {}
