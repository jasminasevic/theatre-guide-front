import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { DirectorAllDetails } from '../DirectorAllDetails.model';

@Component({
  selector: 'app-about-director',
  templateUrl: './about-director.component.html',
  styleUrls: ['./about-director.component.css']
})
export class AboutDirectorComponent implements OnInit {

  director: DirectorAllDetails;
  imgBaseUrl: string = IMG_BASE_URL;
  shows: PopularShows[] = [];
  popularShowsTitle : string = 'Related Shows';
  directorId: any;

  constructor(private activatedRoute: ActivatedRoute,
    private popularShowsService: PopularShowsVerticalService) { }

    readonly IMG_BASE_URL = IMG_BASE_URL;

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: {director: DirectorAllDetails}) => {
      this.director = data.director
    });

    this.directorId = this.activatedRoute.snapshot.params['id'];
    this.popularShowsService.getPopularShowsFilteredByDirector(this.directorId)
    .subscribe(data => {
      this.shows = data
    });
  }
  
}
