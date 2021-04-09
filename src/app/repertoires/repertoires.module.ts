import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { GlobalModule } from '../globalFrontendComponents/global.module';

import { RepertoiresRoutes } from './repertoires.routing';
import { AgmCoreModule } from '@agm/core';

import { AboutRepertoireComponent } from  './about-repertoire/about-repertoire.component';
import { AllRepertoiresComponent } from './all-repertoires/all-repertoires.component';

import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalModule } from '../_modal';

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
    RouterModule.forChild(RepertoiresRoutes),
    SharedModule,
    NgxPaginationModule,
    ModalModule
  ],
  declarations: [ 
    AboutRepertoireComponent,
    AllRepertoiresComponent
  ],
  providers: [
   {
     provide: DROPZONE_CONFIG,
     useValue: DEFAULT_DROPZONE_CONFIG
   }
 ]
})
export class RepertoiresModule { }
