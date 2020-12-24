import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PopularShowsVerticalComponent } from '../globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule
  ],
  declarations: [
    GallerySliderComponent,
    PopularShowsVerticalComponent
  ],
  exports: [
    GallerySliderComponent,
    PopularShowsVerticalComponent
  ] 
})
export class SharedModule { }
