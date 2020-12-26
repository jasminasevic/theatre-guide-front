import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PopularShowsVerticalComponent } from '../globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.component';
import { TitleBarComponent } from '../globalFrontendComponents/TitleBar/TitleBar.component';
import { RouterModule } from '@angular/router';
import { SocialMediaIconsComponent } from '../globalFrontendComponents/socialMediaIcons/socialMediaIcons.component';
@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule
  ],
  declarations: [
    GallerySliderComponent,
    PopularShowsVerticalComponent,
    TitleBarComponent,
    SocialMediaIconsComponent
  ],
  exports: [
    GallerySliderComponent,
    PopularShowsVerticalComponent,
    TitleBarComponent,
    SocialMediaIconsComponent
  ] 
})
export class SharedModule { }
