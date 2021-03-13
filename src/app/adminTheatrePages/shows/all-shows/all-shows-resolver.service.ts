import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IShowData } from 'src/app/shared/interfaces/IShowData';
import { ShowsService } from '../shows.service';

@Injectable({
  providedIn: 'root'
})
export class AllShowsResolverService implements Resolve<IShowData> {

constructor(private showService: ShowsService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<IShowData> {
    return this.showService.getShowsFilteredByTheatre();
  }
}
