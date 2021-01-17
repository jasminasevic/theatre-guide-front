import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { RecentlyJoinedTheatres } from './RecentlyJoinedTheatres.model';
import { API_URL } from '../../app.constants';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecentlyJoinedTheatresService {

private readonly API_URL = API_URL;
constructor(private httpClient: HttpClient) { }

  getRecentlyJoinedTheatres() : Observable<RecentlyJoinedTheatres[]>{

    let params = new HttpParams;

    params = params.append('Type', 'recentlyJoinedTheatres');

    return this.httpClient.get<RecentlyJoinedTheatres[]>(this.API_URL + '/theatres', { params })
      .pipe(
        map((recentlyJoinedTheatres: RecentlyJoinedTheatres[]) => recentlyJoinedTheatres),
        catchError(err => throwError(err))
      )
  }
}
