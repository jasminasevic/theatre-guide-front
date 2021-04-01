import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IRepertoireData } from 'src/app/shared/interfaces/IRepertoireData';
import { AddRepertoire } from './addRepertoire.model';

@Injectable({
  providedIn: 'root'
})
export class RepertoiresService {

constructor(private httpClient: HttpClient,
  private token: TokenStorageService) { }

public API_URL = API_URL;
public theatreId = this.token.getTheatreId();

getRepertoiresFilteredByTheatre(perPage: number = 4, pageNumber: number = 1, 
  searchQuery: string = "", sortOrder: string = "", pastShows: boolean = false) 
: Observable<IRepertoireData>{
  let params = new HttpParams();
  params = params.append('perPage', String(perPage));
  params = params.append('pageNumber', String(pageNumber));
  params = params.append('searchQuery', String(searchQuery));
  params = params.append('sortOrder', String(sortOrder));
  params = params.append('Type', 'repertoiresFilteredByTheatre');
  params = params.append('TheatreId', this.theatreId);
  params = params.append('PastShows', String(pastShows));

  return this.httpClient.get<IRepertoireData>(this.API_URL + '/repertoires', { params })
    .pipe(
      map((repertoire: IRepertoireData) => repertoire)
    )}

addRepertoire(repertoire) : Observable<AddRepertoire>{
  return this.httpClient.post<AddRepertoire>(this.API_URL + '/repertoires', repertoire)
    .pipe(
      map((repertoire: AddRepertoire) => repertoire)
    )
  }

getRepertoire(id): Observable<AddRepertoire>{
  let params = new HttpParams();
  params = params.append('Type', 'repertoireForEdit');

  return this.httpClient.get<AddRepertoire>(this.API_URL + '/repertoires/' + id, { params })
    .pipe(
      map((repertoire: AddRepertoire) => repertoire)
    )
  }

  
editRepertoire(id, repertoire) : Observable<AddRepertoire>{
  return this.httpClient.put<AddRepertoire>(this.API_URL + '/repertoires/' + id, repertoire)
    .pipe(
      map((repertoire: AddRepertoire) => repertoire)
    )
  }


deleteRepertoire(id: number) : Observable<void> {
  return this.httpClient.delete<void>(this.API_URL + '/repertoires/' + id);
  }
}
