import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RepertoireAllDetails } from '../RepertoireAllDetails.model';
import { RepertoiresService } from '../repertoires.service';

@Injectable({
  providedIn: 'root'
})
export class AboutRepertoireResolverService implements Resolve<RepertoireAllDetails>{

constructor(private repertoireService: RepertoiresService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RepertoireAllDetails> {
    return this.repertoireService.getRepertoire(route.paramMap.get('id'));
  }

}
