import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { UpcomingPremieres } from './UpcomingPremieres.model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingPremieresService {

  private readonly API_URL = API_URL;
  constructor(private httpClient: HttpClient) { }
  
    getUpcomingPremieres() : Observable<UpcomingPremieres[]>{
  
      let params = new HttpParams;
  
      params = params.append('Type', 'upcomingPremieres');
  
      return this.httpClient.get<UpcomingPremieres[]>(this.API_URL + '/repertoires', { params })
        .pipe(
          map((upcomingPremieres: UpcomingPremieres[]) => upcomingPremieres),
          catchError(err => throwError(err))
        )
    }

}
