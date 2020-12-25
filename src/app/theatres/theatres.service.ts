import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { TheatreDetails } from './TheatreDetails.model';

@Injectable({
  providedIn: 'root'
})
export class TheatresService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getTheatre(theatreId) : Observable<TheatreDetails>{
    return this.httpClient.get<TheatreDetails>(this.API_URL + '/theatres/' + theatreId)
      .pipe(
        map((theatre: TheatreDetails) => theatre),
        catchError(err => throwError(err))
      )
  }
}
