import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowAllDetails } from '../ShowAllDetails.model';
import { ShowsService } from '../shows.service';

@Injectable({
  providedIn: 'root'
})
export class AboutShowResolverService implements Resolve<ShowAllDetails> {

constructor(private showService: ShowsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShowAllDetails>{
    return  this.showService.getShow(route.paramMap.get('id'))
  }

}
