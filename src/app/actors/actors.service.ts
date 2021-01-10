import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { ActorAllDetails } from './ActorAllDetails.model';
import { IActorData } from '../shared/interfaces/IActorData';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getActor(actorId) : Observable<ActorAllDetails>{
    return this.httpClient.get<ActorAllDetails>(this.API_URL + '/actors/' + actorId)
      .pipe(
        map((actor: ActorAllDetails) => actor),
        catchError(err => throwError(err))
      )
  }

  getAllActors(perPage: number = 4, pageNumber: number = 1, searchQuery: string = '', sortOrder: string = '') 
  : Observable<IActorData>{
      let params = new HttpParams();

      params = params.append('perPage', String(perPage));
      params = params.append('pageNumber', String(pageNumber));
      params = params.append('searchQuery', String(searchQuery));
      params = params.append('sortOrder', String(sortOrder));

      return this.httpClient.get<IActorData>(this.API_URL + '/actors', {params})
        .pipe(
          map((actorData: IActorData) => actorData),
          catchError(err => throwError(err))
        )
  }
}
