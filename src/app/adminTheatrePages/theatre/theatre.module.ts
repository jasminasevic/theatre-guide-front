import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TheatreRoutes } from './theatre.routing';
import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(TheatreRoutes)
  ],
  declarations: [
    EditTheatreComponent
  ]
})
export class TheatreModule { }
