import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ActorAllDetails } from '../ActorAllDetails.model';

@Component({
  selector: 'app-about-actor',
  templateUrl: './about-actor.component.html',
  styleUrls: ['./about-actor.component.css']
})
export class AboutActorComponent implements OnInit {

  actor: ActorAllDetails;
  imgBaseUrl: string = IMG_BASE_URL;
  shows: PopularShows[] = [];
  popularShowsTitle : string = 'Related Shows';
  actorId: any;
  
  constructor(private activatedRoute: ActivatedRoute,
    private popularShowsService: PopularShowsVerticalService) { }

    readonly IMG_BASE_URL = IMG_BASE_URL;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { actor: ActorAllDetails}) => {
      this.actor = data.actor
    });

    this.actorId = this.activatedRoute.snapshot.params['id'];
    this.popularShowsService.getPopularShowsFilteredByActor(this.actorId)
      .subscribe(data => {
        this.shows = data[0].getPopularShowsDtos
      });
  }

}
