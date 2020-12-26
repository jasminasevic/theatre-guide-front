import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { ActorDetails } from './ActorDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getActor(actorId) : Observable<ActorDetails>{
    return this.httpClient.get<ActorDetails>(this.API_URL + '/actors/' + actorId)
      .pipe(
        map((actor: ActorDetails) => actor),
        catchError(err => throwError(err))
      )
  }
}
