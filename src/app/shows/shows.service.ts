import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { ShowAllDetails } from './ShowAllDetails.model';
import { IShowData } from '../shared/interfaces/IShowData';
import { TokenStorageService } from '../authentication/tokenStorage.service';
import { IFollowedShowsData } from '../shared/interfaces/IFollowedShowsData';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private readonly API_URL = API_URL;
  userId: number;

  constructor(private httpClient: HttpClient,
    private token: TokenStorageService) { }

  getShow(showId) : Observable<ShowAllDetails>{
    return this.httpClient.get<ShowAllDetails>(this.API_URL + '/shows/' + showId)
      .pipe(
        map((show: ShowAllDetails) => show),
        catchError(err => throwError(err))
      )
  }

  getAllShows(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
  : Observable<IShowData> {
    let params = new HttpParams();

    params = params.append('perPage', String(perPage));
    params = params.append('pageNumber', String(pageNumber));
    params = params.append('searchQuery', String(searchQuery));
    params = params.append('sortOrder', String(sortOrder));

    return this.httpClient.get<IShowData>(this.API_URL + '/shows', { params })
      .pipe(
        map((showData: IShowData) => showData),
        catchError(err => throwError(err))
      )
  }

  getFollowedShowsFilteredByUserId(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
  : Observable<IFollowedShowsData> {
    let params = new HttpParams();
    this.userId = this.token.getUserId();

    params = params.append('Type', 'followedShowsFilteredByUserId');
    params = params.append('UserId', String(this.userId));
    params = params.append('perPage', String(perPage));
    params = params.append('pageNumber', String(pageNumber));
    params = params.append('searchQuery', String(searchQuery));
    params = params.append('sortOrder', String(sortOrder));

    return this.httpClient.get<IFollowedShowsData>(this.API_URL + '/shows', { params })
      .pipe(
        map((showData: IFollowedShowsData) => showData),
        catchError(err => throwError(err))
      )
  }

}
