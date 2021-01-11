import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IDirectorData } from '../../shared/interfaces/IDirectorData';
import { DirectorsService } from '../directors.service';

@Injectable({
  providedIn: 'root'
})
export class AllDirectorsResolverService implements Resolve<IDirectorData> {

constructor(private directorService: DirectorsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IDirectorData> {
    return this.directorService.getAllDirectors();
  }

}
