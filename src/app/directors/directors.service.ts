import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { DirectorAllDetails } from './DirectorAllDetails.model';
import { IDirectorData } from '../shared/interfaces/IDirectorData';
import { DirectorBaseDetails } from './DirectorBaseDetails.model';

@Injectable({
  providedIn: 'root'
})
export class DirectorsService {

  private readonly API_URL = API_URL;
  
  constructor(private httpClient: HttpClient) { }

  getDirector(directorId) : Observable<DirectorAllDetails>{
    return this.httpClient.get<DirectorAllDetails>(this.API_URL + '/directors/' + directorId)
      .pipe(
        map((director: DirectorAllDetails) => director),
        catchError(err => throwError(err))
      )
  }

  getAllDirectors(perPage: number = 4, pageNumber: number = 1, searchQuery: string = '', sortOrder: string = '') 
  : Observable<IDirectorData>{
      let params = new HttpParams();

      params = params.append('perPage', String(perPage));
      params = params.append('pageNumber', String(pageNumber));
      params = params.append('searchQuery', String(searchQuery));
      params = params.append('sortOrder', String(sortOrder));

      return this.httpClient.get<IDirectorData>(this.API_URL + '/directors', {params})
        .pipe(
          map((directorData: IDirectorData) => directorData),
          catchError(err => throwError(err))
        )
    }

    getDirectorsList() : Observable<DirectorBaseDetails[]>{
      return this.httpClient.get<DirectorBaseDetails[]>(this.API_URL + '/directors')
        .pipe(
          map((directorsList: DirectorBaseDetails[]) => directorsList),
          catchError(err => throwError(err))
        )
    }
}
