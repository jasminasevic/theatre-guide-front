import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IShowData } from 'src/app/shared/interfaces/IShowData';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

constructor(private httpClient: HttpClient,
  private token: TokenStorageService) { }

  public API_URL = API_URL;
  theatreId = this.token.getTheatreId();

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
}


