import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { TheatreAllDetails } from './TheatreAllDetails.model';
import { ITheatreData } from '../shared/interfaces/ITheatreData';

@Injectable({
  providedIn: 'root'
})
export class TheatresService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getTheatre(theatreId) : Observable<TheatreAllDetails>{
    return this.httpClient.get<TheatreAllDetails>(this.API_URL + '/theatres/' + theatreId)
      .pipe(
        map((theatre: TheatreAllDetails) => theatre),
        catchError(err => throwError(err))
      )
  }

  getAllTheatres(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
  : Observable<ITheatreData> {
    let params = new HttpParams();

    params = params.append('perPage', String(perPage));
    params = params.append('pageNumber', String(pageNumber));
    params = params.append('searchQuery', String(searchQuery));
    params = params.append('sortOrder', String(sortOrder));
    params = params.append('Type', "visible");

    return this.httpClient.get<ITheatreData>(this.API_URL + '/theatres', { params })
      .pipe(
        map((theatreData: ITheatreData) => theatreData),
        catchError(err => throwError(err))
      )
  }
}
