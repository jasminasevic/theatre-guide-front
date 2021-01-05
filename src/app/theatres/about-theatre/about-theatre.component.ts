import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { TheatreAllDetails } from '../TheatreAllDetails.model';

@Component({
  selector: 'about-theatre',
  templateUrl: './about-theatre.component.html',
  styleUrls: ['./about-theatre.component.css']
})
export class AboutTheatreComponent implements OnInit {
   
   lat = -34.397;
   lng = 150.644;

   theatre: TheatreAllDetails;
   imgBaseUrl: string = IMG_BASE_URL;
   shows: PopularShows[];
   popularShowsTitle : string = 'Related Shows';
   theatreId: any;
   
   constructor(private popularShowsService: PopularShowsVerticalService,
    private activatedRoute: ActivatedRoute){}

    readonly IMG_BASE_URL = IMG_BASE_URL;

   ngOnInit(){
    this.activatedRoute.data.subscribe((data: { theatre: TheatreAllDetails}) => {
      this.theatre = data.theatre
    });

    this.theatreId = this.activatedRoute.snapshot.params['id'];
    this.popularShowsService.getPopularShowsFilteredByTheatre(this.theatreId)
      .subscribe(data => {
        this.shows = data,
        console.log(this.shows)
      });
   }

}
