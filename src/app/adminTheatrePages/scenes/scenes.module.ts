import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ScenesRoutes } from './scenes.routing';
import { AllScenesComponent } from './all-scenes/all-scenes.component';
import { AddSceneComponent } from './add-scene/add-scene.component';
import { EditSceneComponent } from './edit-scene/edit-scene.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ScenesRoutes),
    SharedModule,
    NgxPaginationModule,
    ReactiveFormsModule
  ],
  declarations: [
    AllScenesComponent,
    AddSceneComponent,
    EditSceneComponent
  ]
})
export class ScenesModule { }
