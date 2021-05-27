import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IMG_BASE_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { CheckIsTheatreDataAddeedService } from 'src/app/shared/services/checkIsTheatreDataAddeed.service';
import { TheatresService } from 'src/app/theatres/theatres.service';
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

  isRepertoireAdded: boolean = false;
  subscription: Subscription;
  isTheatreVisible: boolean;
  isSceneAdded: boolean;
  isShowAdded: boolean;

  constructor(private activatedRoute: ActivatedRoute,
    private theatreService: TheatresService,
    private token: TokenStorageService,
    private checkIsTheatreDataAddeedService: CheckIsTheatreDataAddeedService) {
      this.checkIsTheatreDataAddeedService.currentTheatreVisibilityStatus$.subscribe(
        data => {
          this.isTheatreVisible = data;
        }
      )
      this.checkIsTheatreDataAddeedService.currentSceneAddedStatus$.subscribe(
        data => {
          this.isSceneAdded = data;
        }
      )
      this.checkIsTheatreDataAddeedService.currentShowAddedStatus$.subscribe(
        data => {
          this.isShowAdded = data;
        }
      )
      this.checkIsTheatreDataAddeedService.currentRepertoireStatus$.subscribe(
        data => {
          this.isRepertoireAdded = data;
        }
      )
    }

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: any) => {
      this.shows = data.data.popularShows,
      this.showFollowers = data.data.showFollowers,
      this.soldTicketsNumber = data.data.soldTicketsNumber,
      this.recentPurchases = data.data.recentPurchases
    });  
    
    let theatreId = this.token.getTheatreId();
     this.theatreService.getTheatre(theatreId)
      .subscribe(data => {
         this.isTheatreVisible = data.isVisible;
         if(Object.keys(data.getSceneWithSectorsDtos).length != 0)
            this.isSceneAdded = true;
         if(Object.keys(data.showBaseInfoDtos).length != 0)
            this.isShowAdded = true;
         if(Object.keys(data.getRepertoireForTheatreDtos).length != 0)
            this.isRepertoireAdded = true;
      })
  }

}
