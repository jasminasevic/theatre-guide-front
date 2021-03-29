import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IRepertoireData } from 'src/app/shared/interfaces/IRepertoireData';
import { RepertoiresService } from '../repertoires.service';

@Injectable({
  providedIn: 'root'
})
export class AllRepertoiresResolverService implements Resolve<IRepertoireData> {

constructor(private repertoireService: RepertoiresService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<IRepertoireData> {
    return this.repertoireService.getUpcomingRepertoiresFilteredByTheatre();
  }

}
