import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { ShowAllDetails } from './ShowAllDetails.model';
import { IShowData } from '../shared/interfaces/IShowData';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

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

}
