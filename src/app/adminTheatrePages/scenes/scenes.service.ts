import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { ISceneData } from 'src/app/shared/interfaces/ISceneData';
import { SceneBaseInfo } from './sceneBaseInfo.model';

@Injectable({
  providedIn: 'root'
})
export class ScenesService {

  constructor(private token: TokenStorageService,
    private httpClient: HttpClient) { }

  public API_URL = API_URL;
  theatreId = this.token.getTheatreId();
  
  getSceneListFilteredByTheatre() : Observable<SceneBaseInfo[]>{
    let params = new HttpParams();
    params = params.append('TheatreId', this.theatreId);

    return this.httpClient.get<SceneBaseInfo[]>(this.API_URL + '/scenes', { params })
      .pipe(
        map((scenes: SceneBaseInfo[]) => scenes)
      );
  }

  getScenesFilteredByTheatre(perPage: number = 4, pageNumber: number = 1, searchQuery: string = "", sortOrder: string = "") 
: Observable<ISceneData>{
  let params = new HttpParams();
  params = params.append('perPage', String(perPage));
  params = params.append('pageNumber', String(pageNumber));
  params = params.append('searchQuery', String(searchQuery));
  params = params.append('sortOrder', String(sortOrder));
  params = params.append('Type', 'scenesFilteredByTheatre');
  params = params.append('TheatreId', this.theatreId);

  return this.httpClient.get<ISceneData>(this.API_URL + '/scenes', { params })
    .pipe(
      map((scenes: ISceneData) => scenes)
    )}

  deleteScene(id: number) : Observable<void> {
    return this.httpClient.delete<any>(this.API_URL + '/scenes/' + id);
  }

}
