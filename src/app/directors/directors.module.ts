import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { DirectorsRoutes } from './directors.routing';
import { AgmCoreModule } from '@agm/core';

import { AboutDirectorComponent } from  './about-director/about-director.component';
import { AllDirectorsComponent } from './all-directors/all-directors.component';

import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };


@NgModule({
  declarations: [
    AllDirectorsComponent,
    AboutDirectorComponent
  ],
  imports: [
    CommonModule,
    DropzoneModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(DirectorsRoutes),
    SharedModule,
    NgxPaginationModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class DirectorsModule { }
