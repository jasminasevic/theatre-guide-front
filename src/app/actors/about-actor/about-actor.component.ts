import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsService } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.service';
import { ActorDetails } from '../ActorDetails.model';

@Component({
  selector: 'app-about-actor',
  templateUrl: './about-actor.component.html',
  styleUrls: ['./about-actor.component.css']
})
export class AboutActorComponent implements OnInit {

  actor: ActorDetails;
  imgBaseUrl: string = IMG_BASE_URL;
  shows: PopularShows[];
  popularShowsTitle : string = 'Popular Shows';
  
  constructor(private activatedRoute: ActivatedRoute,
    private popularShowsService: PopularShowsService) { }

    readonly IMG_BASE_URL = IMG_BASE_URL;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { actor: ActorDetails}) => {
      this.actor = data.actor,
      console.log(this.actor);
    });

    this.popularShowsService.getPopularShows()
      .subscribe(data => {
        this.shows = data
      });
  }

}
