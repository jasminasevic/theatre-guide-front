import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../../app.constants';
import { PopularShows } from './PopularShows.model';
@Injectable({
  providedIn: 'root'
})
export class PopularShowsService {
  
private readonly API_URL = API_URL;

constructor(private httpClient: HttpClient) { }

  getPopularShows() : Observable<PopularShows[]>{
    
    let params = new HttpParams;
    params = params.append('Type', 'popularShows');

    return this.httpClient.get<PopularShows[]>(this.API_URL + '/shows', { params })
      .pipe(
        map((popularShows: PopularShows[]) => popularShows),
        catchError(err => throwError(err))
      )
  }

}
