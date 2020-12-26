import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { DirectorDetails } from '../DirectorDetails.model';
import { DirectorsService } from '../directors.service';

@Injectable({
  providedIn: 'root'
})
export class DirectorResolverService implements Resolve<DirectorDetails> {

  constructor(private directorService: DirectorsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<DirectorDetails> {
    return this.directorService.getDirector(route.paramMap.get('id'));
  }

}
