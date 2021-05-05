import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShowAllDetails } from '../ShowAllDetails.model';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from '../../globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { IShowFollowerChange } from 'src/app/shared/interfaces/IShowFollowerChange';

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
   show: ShowAllDetails;
   showId: number;
   followersNumber: number;
   follower: number = 0;

   shows: PopularShows[] = [];
	popularShowsTitle : string = 'Popular Shows';

   constructor(private activatedRoute: ActivatedRoute,
      private popularShowVerticalService: PopularShowsVerticalService){
      }
 
   ngOnInit(){
      this.activatedRoute.params.subscribe(params => {
         this.showId = params['id'];
         this.popularShowVerticalService.getPopularShowsFilteredById(this.showId)
            .subscribe(data => {
               this.shows = data
            })
      })

      this.activatedRoute.data.subscribe((data: {show: ShowAllDetails}) => {
         this.show = data.show,
         this.headerGallerySlider = this.show.showImageDtos,
         this.followersNumber = data.show.followersNumber
      });
   }

   updateFollowersNumber($event: IShowFollowerChange){
      this.follower = $event.amount;
      this.followersNumber += this.follower;
   }

}
