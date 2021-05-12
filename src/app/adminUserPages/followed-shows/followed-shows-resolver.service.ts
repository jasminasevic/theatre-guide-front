import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IFollowedShowsData } from 'src/app/shared/interfaces/IFollowedShowsData';
import { ShowsService } from 'src/app/shows/shows.service';

@Injectable({
  providedIn: 'root'
})
export class FollowedShowsResolverService implements Resolve<IFollowedShowsData> {

constructor(private showService: ShowsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IFollowedShowsData> {
    return this.showService.getFollowedShowsFilteredByUserId();
  }

}
