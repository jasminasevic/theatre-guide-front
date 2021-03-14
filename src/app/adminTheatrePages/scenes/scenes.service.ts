import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { SceneBaseInfo } from './sceneBaseInfo.model';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  constructor(private token: TokenStorageService,
    private httpClient: HttpClient) { }

  public API_URL = API_URL;
  theatreId = this.token.getTheatreId();
  
  getSceneListFiltereByTheatre() : Observable<SceneBaseInfo[]>{
    let params = new HttpParams();
    params = params.append('TheatreId', this.theatreId);

    return this.httpClient.get<SceneBaseInfo[]>(this.API_URL + '/scenes', { params })
      .pipe(
        map((scenes: SceneBaseInfo[]) => scenes),
        catchError(err => throwError(err))
      );
  }
}
