import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsService } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.service';
import { TheatreDetails } from '../TheatreDetails.model';

@Component({
  selector: 'about-theatre',
  templateUrl: './about-theatre.component.html',
  styleUrls: ['./about-theatre.component.css']
})
export class AboutTheatreComponent implements OnInit {
   
   lat = -34.397;
   lng = 150.644;

   theatre: TheatreDetails;
   imgBaseUrl: string = IMG_BASE_URL;
   shows: PopularShows[];
   popularShowsTitle : string = 'Popular Shows';
   
   constructor(private popularShowsService: PopularShowsService,
    private activatedRoute: ActivatedRoute){}

    readonly IMG_BASE_URL = IMG_BASE_URL;

   ngOnInit(){
    this.activatedRoute.data.subscribe((data: { theatre: TheatreDetails}) => {
      this.theatre = data.theatre,
      console.log(this.theatre)
    });

    this.popularShowsService.getPopularShows()
      .subscribe(data => {
        this.shows = data
      });
   }

}
