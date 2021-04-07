import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class TheatreDashboardComponent implements OnInit {

  theatreId: number;
  shows: PopularShows[];
  readonly IMG_BASE_URL = IMG_BASE_URL;
  showFollowers: number;
  soldTicketsNumber: number;
  recentPurchases: any;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.shows = data.data.popularShows,
      this.showFollowers = data.data.showFollowers,
      this.soldTicketsNumber = data.data.soldTicketsNumber,
      this.recentPurchases = data.data.recentPurchases,
      console.log(this.recentPurchases)
    });    
  }

}
