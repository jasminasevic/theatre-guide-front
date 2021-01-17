import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { IRepertoireData } from '../shared/interfaces/IRepertoireData';
import { RepertoireAllDetails } from './RepertoireAllDetails.model';

@Injectable({
  providedIn: 'root'
})
export class RepertoiresService {
  
  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getRepertoire(repertoireId) : Observable<RepertoireAllDetails>{
    return this.httpClient.get<RepertoireAllDetails>(this.API_URL + '/repertoires/' + repertoireId)
      .pipe(
        map((repertoire: RepertoireAllDetails) => repertoire),
        catchError(err => throwError(err))
      )
  }


  getAllRepertoires(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
  : Observable<IRepertoireData> {
    let params = new HttpParams();

    params = params.append('perPage', String(perPage));
    params = params.append('pageNumber', String(pageNumber));
    params = params.append('searchQuery', String(searchQuery));
    params = params.append('sortOrder', String(sortOrder));

    return this.httpClient.get<IRepertoireData>(this.API_URL + '/repertoires', { params })
      .pipe(
        map((repertoireData: IRepertoireData) => repertoireData),
        catchError(err => throwError(err))
      )
  }
}
