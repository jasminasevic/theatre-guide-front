import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TheatreRoutes } from './theatre.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';
import { NgxDropzoneModule } from 'ngx-dropzone';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TheatreRoutes),
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  declarations: [
    EditTheatreComponent
  ]
})
export class TheatreModule { }
