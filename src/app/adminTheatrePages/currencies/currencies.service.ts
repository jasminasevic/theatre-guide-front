import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root'
})
export class CurrenciesService {

  private API_URL = API_URL;
  
constructor(private httpClient: HttpClient) { }

getCurrencyList(): Observable<Currency[]>{
  return this.httpClient.get<Currency[]>(this.API_URL + '/currencies')
    .pipe(
      map((currency: Currency[]) => currency),
      catchError(err => throwError(err))
    )
  }
}
