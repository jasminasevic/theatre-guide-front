import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ShowDetails } from '../ShowDetails.model';
import { ShowsService } from '../shows.service';

@Injectable({
  providedIn: 'root'
})
export class ShowResolverService implements Resolve<ShowDetails>{

constructor(private showService: ShowsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ShowDetails> {
    return  this.showService.getShow(route.paramMap.get('id'))
  }

}
