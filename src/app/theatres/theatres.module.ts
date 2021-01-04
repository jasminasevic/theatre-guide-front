import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { TheatresRoutes } from './theatres.routing';
import { AgmCoreModule } from '@agm/core';

import { AboutTheatreComponent } from  './about-theatre/about-theatre.component';
import { AllTheatresComponent } from './all-theatres/all-theatres.component';

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
    DropzoneModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(TheatresRoutes),
    SharedModule,
    NgxPaginationModule
  ],
  declarations: [ 
    AboutTheatreComponent,
    AllTheatresComponent
  ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})
export class TheatresModule { }
