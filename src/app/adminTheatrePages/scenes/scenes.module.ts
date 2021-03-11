import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ScenesRoutes } from './scenes.routing';
import { AllScenesComponent } from './all-scenes/all-scenes.component';
import { AddSceneComponent } from './add-scene/add-scene.component';
import { EditSceneComponent } from './edit-scene/edit-scene.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ScenesRoutes)
  ],
  declarations: [
    AllScenesComponent,
    AddSceneComponent,
    EditSceneComponent
  ]
})
export class ScenesModule { }
