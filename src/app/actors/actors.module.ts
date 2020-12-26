import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { ActorsRoutes } from './actors.routing';
import { AgmCoreModule } from '@agm/core';

import { AboutActorComponent } from  './about-actor/about-actor.component';
import { AllActorsComponent } from './all-actors/all-actors.component';

import { SharedModule } from '../shared/shared.module';

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };

@NgModule({
  declarations: [
    AllActorsComponent,
    AboutActorComponent
  ],
  imports: [
    CommonModule,
    DropzoneModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(ActorsRoutes),
    SharedModule
  ],
  providers: [
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG
    }
  ]
})
export class ActorsModule { }
