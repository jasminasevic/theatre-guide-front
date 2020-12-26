import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { DirectorDetails } from './DirectorDetails.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  private readonly API_URL = API_URL;
  
  constructor(private httpClient: HttpClient) { }

  getDirector(directorId) : Observable<DirectorDetails>{
    return this.httpClient.get<DirectorDetails>(this.API_URL + '/directors/' + directorId)
      .pipe(
        map((director: DirectorDetails) => director),
        catchError(err => throwError(err))
      )
  }
}
