import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GallerySliderComponent } from '../globalFrontendComponents/GallerySlider/GallerySlider.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PopularShowsVerticalComponent } from '../globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.component';
import { TitleBarComponent } from '../globalFrontendComponents/TitleBar/TitleBar.component';
import { RouterModule } from '@angular/router';
import { SocialMediaIconsComponent } from '../globalFrontendComponents/socialMediaIcons/socialMediaIcons.component';
import { SidebarLayoutOneComponent } from '../listing/SidebarLayoutOne/SidebarLayoutOne.component';
import { SidebarLayoutTwoComponent } from '../listing/SidebarLayoutTwo/SidebarLayoutTwo.component';
import { PaginationComponent } from '../globalFrontendComponents/Pagination/Pagination.component';
import { NewsletterComponent } from '../globalFrontendComponents/newsletter/newsletter.component';
import { TeamComponent } from '../globalFrontendComponents/Team/Team.component';
import { ProfileComponent } from '../profile/profile.component';
import { SeatsComponent} from '../globalFrontendComponents/seats/seats.component';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    GallerySliderComponent,
    PopularShowsVerticalComponent,
    TitleBarComponent,
    SocialMediaIconsComponent,
    SidebarLayoutOneComponent,
    SidebarLayoutTwoComponent,
    PaginationComponent,
    NewsletterComponent,
    TeamComponent,
    ProfileComponent,
    SeatsComponent
  ],
  exports: [
    GallerySliderComponent,
    PopularShowsVerticalComponent,
    TitleBarComponent,
    SocialMediaIconsComponent,
    SidebarLayoutOneComponent,
    SidebarLayoutTwoComponent,
    PaginationComponent,
    NewsletterComponent,
    TeamComponent,
    ProfileComponent,
    SeatsComponent
  ] 
})
export class SharedModule { }
