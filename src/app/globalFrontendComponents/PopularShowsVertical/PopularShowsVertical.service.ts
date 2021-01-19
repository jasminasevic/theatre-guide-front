import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { PopularShows } from '../PopularShows/PopularShows.model';
import { ActorPopularShows } from '../PopularShowsVertical/ActorPopularShows.model';

@Injectable({
  providedIn: 'root'
})
export class PopularShowsVerticalService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getPopularShowsFilteredById(showId) : Observable<PopularShows[]>{
    
    let params = new HttpParams;
    params = params.append('Type', 'popularShows');
    params = params.append('ShowId', showId);

    return this.httpClient.get<PopularShows[]>(this.API_URL + '/shows', { params })
      .pipe(
        map((popularShows: PopularShows[]) => popularShows),
        catchError(err => throwError(err))
      )
  }

  getPopularShowsFilteredByActor(actorId) : Observable<ActorPopularShows[]>{
    
    let params = new HttpParams;
    params = params.append('Type', 'popularShows');
    params = params.append('ActorId', actorId);

    return this.httpClient.get<ActorPopularShows[]>(this.API_URL + '/shows', { params })
      .pipe(
        map((popularShows: ActorPopularShows[]) => popularShows),
        catchError(err => throwError(err))
      )
  }

  getPopularShowsFilteredByDirector(directorId) : Observable<PopularShows[]>{
    
    let params = new HttpParams;
    params = params.append('Type', 'popularShows');
    params = params.append('DirectorId', directorId);

    return this.httpClient.get<PopularShows[]>(this.API_URL + '/shows', { params })
      .pipe(
        map((popularShows: PopularShows[]) => popularShows),
        catchError(err => throwError(err))
      )
  }

  getPopularShowsFilteredByTheatre(theatreId) : Observable<PopularShows[]>{
    
    let params = new HttpParams;
    params = params.append('Type', 'popularShows');
    params = params.append('TheatreId', theatreId);

    return this.httpClient.get<PopularShows[]>(this.API_URL + '/shows', { params })
      .pipe(
        map((popularShows: PopularShows[]) => popularShows),
        catchError(err => throwError(err))
      )
  }

  getPopularShowsFilteredByIdAndTheatre(theatreId, showId) : Observable<PopularShows[]>{
    
    let params = new HttpParams;
    params = params.append('Type', 'popularShowsFilteredByIdAndTheatre');
    params = params.append('TheatreId', theatreId);
    params = params.append('ShowId', showId);

    return this.httpClient.get<PopularShows[]>(this.API_URL + '/shows', { params })
      .pipe(
        map((popularShows: PopularShows[]) => popularShows),
        catchError(err => throwError(err))
      )
  }

}
