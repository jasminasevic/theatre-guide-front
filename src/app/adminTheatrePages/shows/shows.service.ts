import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IShowData } from 'src/app/shared/interfaces/IShowData';
import { Show } from './show.model';
import { ShowListForRepertoire } from './showListForRepertoire.model';
import { ShowForRepertoire } from './showForRepertoire.model';

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
      map((show: Show) => show)
    )
  }

getShow(showId) : Observable<Show>{

  let params = new HttpParams();
  params = params.append('type', 'allInfo');

  return this.httpClient.get<Show>(this.API_URL + '/shows/' + showId, { params })
    .pipe(
      map((show: Show) => show)
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
      map((shows: IShowData) => shows)
    )
  }

getShowsForRepertoireFilteredByTheatre() : Observable<ShowListForRepertoire[]>{
  let params = new HttpParams();
  params = params.append('Type', 'showsForRepertoireFilteredByTheatre');
  params = params.append('TheatreId', this.theatreId);

  return this.httpClient.get<ShowListForRepertoire[]>(this.API_URL + '/shows', { params })
    .pipe(
      map((repertoires: ShowListForRepertoire[]) => repertoires)
    )
  }

getShowForRepertoire(showId: number) : Observable<ShowForRepertoire[]>{
  let params = new HttpParams();
  params = params.append('type', 'repertoire');

  return this.httpClient.get<ShowForRepertoire[]>(this.API_URL + '/shows/' + showId, { params })
    .pipe(
      map((showForRepertoire: ShowForRepertoire[]) => showForRepertoire),
      catchError(err => throwError(err))
    )
  }

editShow(id: number, show) : Observable<void>{
  return this.httpClient.put<void>(this.API_URL + '/shows/' + id, show)
    .pipe(
      map(show => show)
    )
  }

deleteShow(id: number) : Observable<void> {
  return this.httpClient.delete<any>(this.API_URL + '/shows/' + id);
  }

}



