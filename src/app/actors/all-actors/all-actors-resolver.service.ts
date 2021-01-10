import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IActorData } from '../../shared/interfaces/IActorData';
import { ActorsService } from '../actors.service';

@Injectable({
  providedIn: 'root'
})
export class AllActorsResolverService implements Resolve<IActorData> {

constructor(private actorService: ActorsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IActorData> {
    return this.actorService.getAllActors()
  }

}
