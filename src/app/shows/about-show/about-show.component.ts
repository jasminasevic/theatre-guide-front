import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowDetails } from '../ShowDetails.model';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from '../../globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about-show',
  templateUrl: './about-show.component.html',
  styleUrls: ['./about-show.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AboutShowComponent implements OnInit {
   
   lat = -34.397;
   lng = 150.644;

   headerGallerySlider: any;
   show: ShowDetails;
   showId: any;

   shows: PopularShows[];
	popularShowsTitle : string = 'Popular Shows';

   constructor(private activatedRoute: ActivatedRoute,
      private popularShowVerticalService: PopularShowsVerticalService){}

   ngOnInit(){
      this.activatedRoute.data.subscribe((data: {show: ShowDetails}) => {
         this.show = data.show,
         this.headerGallerySlider = this.show.showImageDtos;
      });

      this.showId = this.activatedRoute.snapshot.params['id'];
      this.popularShowVerticalService.getPopularShowsFilteredById(this.showId)
			.subscribe(data => {
            this.shows = data
			})
   }

}
