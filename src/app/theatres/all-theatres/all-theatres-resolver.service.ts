import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ITheatreData } from 'src/app/shared/interfaces/ITheatreData';
import { TheatresService } from '../theatres.service';

@Injectable({
  providedIn: 'root'
})
export class AllTheatresResolverService implements Resolve<ITheatreData> {

constructor(private theatreService: TheatresService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ITheatreData> {
    return this.theatreService.getAllTheatres();
  }

}
