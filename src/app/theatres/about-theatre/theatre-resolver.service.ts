import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TheatreDetails } from '../TheatreDetails.model';
import { TheatresService } from '../theatres.service';

@Injectable({
  providedIn: 'root'
})
export class TheatreResolverService implements Resolve<TheatreDetails> {

constructor(private theatreService: TheatresService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TheatreDetails> {
    return this.theatreService.getTheatre(route.paramMap.get('id'));
  }

}
