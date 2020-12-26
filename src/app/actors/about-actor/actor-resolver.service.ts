import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ActorDetails } from '../ActorDetails.model';
import { ActorsService } from '../actors.service';

@Injectable({
  providedIn: 'root'
})
export class ActorResolverService implements Resolve<ActorDetails> {

  constructor(private actorService: ActorsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ActorDetails> {
    return this.actorService.getActor(route.paramMap.get('id'));
  }

}
