import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IPurchaseData } from 'src/app/shared/interfaces/IPurchaseData';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {

constructor(private token: TokenStorageService,
  private httpClient: HttpClient) { }

public API_URL = API_URL;
public theatreId = this.token.getTheatreId();

getPurchasesFilteredByTheatre(perPage: number = 4, pageNumber: number = 1, 
  searchQuery: string = "", sortOrder: string = "") 
: Observable<IPurchaseData>{
  let params = new HttpParams();
  params = params.append('perPage', String(perPage));
  params = params.append('pageNumber', String(pageNumber));
  params = params.append('searchQuery', String(searchQuery));
  params = params.append('sortOrder', String(sortOrder));
  params = params.append('Type', 'purchasesFilteredByTheatre');
  params = params.append('TheatreId', this.theatreId);

  return this.httpClient.get<IPurchaseData>(this.API_URL + '/purchases', { params })
    .pipe(
      map((purchase: IPurchaseData) => purchase)
    )}


  getPurchasesNumberFilteredByTheatre(theatreId) : Observable<number>{
    let params = new HttpParams();
    params = params.append('Type', 'purchasesNumberFilteredByTheatre');
    params = params.append('TheatreId', theatreId);
  
    return this.httpClient.get<number>(this.API_URL + '/purchases', { params })
      .pipe(
        map((purchases: number) => purchases)
      )
    }

}
