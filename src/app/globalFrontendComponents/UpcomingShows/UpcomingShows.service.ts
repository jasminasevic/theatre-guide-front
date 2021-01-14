import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { UpcomingShows } from './UpcomingShows.model';

@Injectable({
  providedIn: 'root'
})
export class UpcomingShowsService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }
  
    getUpcomingShows() : Observable<UpcomingShows[]>{
      
      let params = new HttpParams;
      params = params.append('Type', 'upcomingShows');
  
      return this.httpClient.get<UpcomingShows[]>(this.API_URL + '/repertoires', { params })
        .pipe(
          map((popularShows: UpcomingShows[]) => popularShows),
          catchError(err => throwError(err))
        )
    }
}
