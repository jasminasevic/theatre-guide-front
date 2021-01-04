import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TheatreAllDetails } from '../TheatreAllDetails.model';
import { TheatresService } from '../theatres.service';

@Injectable({
  providedIn: 'root'
})
export class TheatreResolverService implements Resolve<TheatreAllDetails> {

  constructor(private theatreService: TheatresService) { }
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<TheatreAllDetails> {
    return this.theatreService.getTheatre(route.paramMap.get('id'));
  }

}
