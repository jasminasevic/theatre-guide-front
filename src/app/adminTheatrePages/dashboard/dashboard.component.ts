import { Component, OnInit } from '@angular/core';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ShowFollowersService } from '../../services/show-followers.service';
import { PurchasesService } from '../purchases/purchases.service';
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

  constructor(private popularShowsService: PopularShowsVerticalService,
    private token: TokenStorageService,
    private showFollowersService: ShowFollowersService,
    private purchasesService: PurchasesService) { }

  ngOnInit() {
    this.theatreId = this.token.getTheatreId();
    this.popularShowsService.getPopularShowsFilteredByTheatre(this.theatreId)
      .subscribe(data =>{
        this.shows = data
      })

    this.showFollowersService.getShowFollowersFilteredByTheatre(this.theatreId)
      .subscribe(data => {
        this.showFollowers = data
      });

    this.purchasesService.getPurchasesNumberFilteredByTheatre(this.theatreId)
      .subscribe(data => {
        this.soldTicketsNumber = data
      });
    
  }

}
