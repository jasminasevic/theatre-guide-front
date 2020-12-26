import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsService } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.service';
import { DirectorDetails } from '../DirectorDetails.model';
import { DirectorsService } from '../directors.service';

@Component({
  selector: 'app-about-director',
  templateUrl: './about-director.component.html',
  styleUrls: ['./about-director.component.css']
})
export class AboutDirectorComponent implements OnInit {

  director: DirectorDetails;
  imgBaseUrl: string = IMG_BASE_URL;
  shows: PopularShows[];
  popularShowsTitle : string = 'Popular Shows';

  constructor(private activatedRoute: ActivatedRoute,
    private popularShowsService: PopularShowsService) { }

    readonly IMG_BASE_URL = IMG_BASE_URL;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {director: DirectorDetails}) => {
      this.director = data.director,
      console.log(this.director)
    });

    this.popularShowsService.getPopularShows()
    .subscribe(data => {
      this.shows = data
    });
  }
  
}
