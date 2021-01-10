import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActorAllDetails } from '../ActorAllDetails.model';
import { ActorsService } from '../actors.service';

@Injectable({
  providedIn: 'root'
})
export class ActorResolverService implements Resolve<ActorAllDetails> {

  constructor(private actorService: ActorsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActorAllDetails> {
    return this.actorService.getActor(route.paramMap.get('id'));
  }

}
