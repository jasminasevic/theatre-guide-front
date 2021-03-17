import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IShowData } from 'src/app/shared/interfaces/IShowData';
import { Show } from './show.model';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

constructor(private httpClient: HttpClient,
  private token: TokenStorageService) { }

  public API_URL = API_URL;
  theatreId = this.token.getTheatreId();

addShow(show) : Observable<Show>{
  return this.httpClient.post<Show>(this.API_URL + '/shows', show)
    .pipe(
      map((show: Show) => show),
      catchError(err => throwError(err))
    )
}

getShowsFilteredByTheatre(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
: Observable<IShowData>{
  let params = new HttpParams();
  params = params.append('perPage', String(perPage));
  params = params.append('pageNumber', String(pageNumber));
  params = params.append('searchQuery', String(searchQuery));
  params = params.append('sortOrder', String(sortOrder));
  params = params.append('Type', "showsFilteredByTheatre");
  params = params.append('TheatreId', this.theatreId);

  return this.httpClient.get<IShowData>(this.API_URL + '/shows', { params })
    .pipe(
      map((shows: IShowData) => shows),
      catchError(err => throwError(err))
    )}

  editShow(id: number, show) : Observable<void>{
    return this.httpClient.put<void>(this.API_URL + '/shows/' + id, show)
      .pipe(
        map(show => show),
        catchError(err => throwError(err))
      )
  }

  deleteShow(id: number) : Observable<void> {
    return this.httpClient.delete<any>(this.API_URL + '/shows/' + id);
  }
}

