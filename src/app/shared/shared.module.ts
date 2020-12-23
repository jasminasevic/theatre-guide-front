import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule
  ],
  declarations: [
    GallerySliderComponent
  ],
  exports: [
    GallerySliderComponent
  ] 
})
export class SharedModule { }
