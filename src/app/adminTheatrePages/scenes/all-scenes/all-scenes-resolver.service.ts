import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ISceneData } from 'src/app/shared/interfaces/ISceneData';
import { ScenesService } from '../scenes.service';

@Injectable({
  providedIn: 'root'
})
export class AllScenesResolverService implements Resolve<ISceneData> {

constructor(private sceneService: ScenesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ISceneData> {
    return this.sceneService.getScenesFilteredByTheatre();
  }

}
