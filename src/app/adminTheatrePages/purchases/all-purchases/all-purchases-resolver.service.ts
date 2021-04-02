import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { IPurchaseData } from 'src/app/shared/interfaces/IPurchaseData';
import { PurchasesService } from '../purchases.service';

@Injectable({
  providedIn: 'root'
})
export class AllPurchasesResolverService implements Resolve<IPurchaseData> {

constructor(private purchaseService: PurchasesService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPurchaseData> {
    return this.purchaseService.getPurchasesFilteredByTheatre();
  }

}
