import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { ShowDetails } from './ShowDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getShow(showId) : Observable<ShowDetails>{
    return this.httpClient.get<ShowDetails>(this.API_URL + '/shows/' + showId)
      .pipe(
        map((show: ShowDetails) => show),
        catchError(err => throwError(err))
      )
  }

}
