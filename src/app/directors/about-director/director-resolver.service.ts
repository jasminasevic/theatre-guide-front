import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DirectorAllDetails } from '../DirectorAllDetails.model';
import { DirectorsService } from '../directors.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorResolverService implements Resolve<DirectorAllDetails> {

  constructor(private directorService: DirectorsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DirectorAllDetails> {
    return this.directorService.getDirector(route.paramMap.get('id'));
  }

}
