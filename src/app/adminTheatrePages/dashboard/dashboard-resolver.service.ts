import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ShowFollowersService } from 'src/app/services/show-followers.service';
import { PurchasesService } from '../purchases/purchases.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardResolverService implements Resolve<any>{

  theatreId: any;

constructor(private popularShowsService: PopularShowsVerticalService,
  private token: TokenStorageService,
  private showFollowersService: ShowFollowersService,
  private purchasesService: PurchasesService) {
   }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.theatreId = this.token.getTheatreId();
    return forkJoin([this.showFollowersService.getShowFollowersFilteredByTheatre(this.theatreId),
      this.purchasesService.getPurchasesNumberFilteredByTheatre(this.theatreId),
      this.popularShowsService.getPopularShowsFilteredByTheatre(this.theatreId),
      this.purchasesService.getRecentPurchasesFilteredByTheatre(this.theatreId)])
        .pipe(
          map(data => {
            return { 
              'showFollowers': data[0],
              'soldTicketsNumber': data[1],
              'popularShows': data[2],
              'recentPurchases': data[3]
            }
          })
        )
  }

}
