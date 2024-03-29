import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AgmCoreModule } from '@agm/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { NouisliderModule } from 'ng2-nouislider';

import { ListWithSidebarComponent } from './ListWithSidebar/ListWithSidebar.component';
import { ListFullWidthComponent } from './ListFullWidth/ListFullWidth.component';
import { ListFullWidthMapComponent } from './ListFullWidthMap/ListFullWidthMap.component'; 

import { GridWithSidebarComponent } from './GridWithSidebar/GridWithSidebar.component';
import { GridFullWidthComponent } from './GridFullWidth/GridFullWidth.component';
import { GridFullWidthMapComponent } from './GridFullWidthMap/GridFullWidthMap.component';

import { HalfScreenMapListComponent } from './HalfScreenMapList/HalfScreenMapList.component';
import { HalfScreenMapGridComponent } from './HalfScreenMapGrid/HalfScreenMapGrid.component';

import { ListingDetailOneComponent } from './ListingDetailOne/ListingDetailOne.component';
import { ListingDetailTwoComponent } from './ListingDetailTwo/ListingDetailTwo.component';
import { SmallGallerySliderComponent } from '../globalFrontendComponents/SmallGallerySlider/SmallGallerySlider.component';

import { ListingRoutes } from './listing.routing';

import { GlobalModule } from '../globalFrontendComponents/global.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    GlobalModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    NouisliderModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBtdO5k6CRntAMJCF-H5uZjTCoSGX95cdk'}),
    RouterModule.forChild(ListingRoutes),
    SharedModule
  ],
  declarations: [ 
     ListWithSidebarComponent,
     ListFullWidthComponent,
     ListFullWidthMapComponent,
     GridWithSidebarComponent,
     GridFullWidthComponent,
     GridFullWidthMapComponent,
     HalfScreenMapListComponent,
     HalfScreenMapGridComponent,
     ListingDetailOneComponent,
     ListingDetailTwoComponent,
     SmallGallerySliderComponent
   ]
})

export class ListingModule {}
