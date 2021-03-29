import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IRepertoireData } from 'src/app/shared/interfaces/IRepertoireData';

@Injectable({
  providedIn: 'root'
})
export class RepertoiresService {

constructor(private httpClient: HttpClient,
  private token: TokenStorageService) { }

public API_URL = API_URL;
public theatreId = this.token.getTheatreId();

getUpcomingRepertoiresFilteredByTheatre(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
: Observable<IRepertoireData>{
  let params = new HttpParams();
  params = params.append('perPage', String(perPage));
  params = params.append('pageNumber', String(pageNumber));
  params = params.append('searchQuery', String(searchQuery));
  params = params.append('sortOrder', String(sortOrder));
  params = params.append('Type', 'repertoiresFilteredByTheatre');
  params = params.append('TheatreId', this.theatreId);
  params = params.append('PastShows', 'no');

  return this.httpClient.get<IRepertoireData>(this.API_URL + '/repertoires', { params })
    .pipe(
      map((repertoire: IRepertoireData) => repertoire)
    )}


getRepertoiresFilteredByTheatre(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
: Observable<IRepertoireData>{
  let params = new HttpParams();
  params = params.append('perPage', String(perPage));
  params = params.append('pageNumber', String(pageNumber));
  params = params.append('searchQuery', String(searchQuery));
  params = params.append('sortOrder', String(sortOrder));
  params = params.append('Type', 'repertoiresFilteredByTheatre');
  params = params.append('TheatreId', this.theatreId);

  return this.httpClient.get<IRepertoireData>(this.API_URL + '/repertoires', { params })
    .pipe(
      map((repertoire: IRepertoireData) => repertoire)
    )}



deleteRepertoire(id: number) : Observable<void> {
  return this.httpClient.delete<void>(this.API_URL + '/repertoires/' + id);
  }
}
