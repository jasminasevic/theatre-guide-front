import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { ISceneData } from 'src/app/shared/interfaces/ISceneData';
import { SceneBaseInfo } from './sceneBaseInfo.model';
import { Scene } from './scene.model';

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

  addScene(scene) : Observable<Scene>{
    return this.httpClient.post<Scene>(this.API_URL + '/scenes/', scene)
      .pipe(
        map((scene: Scene) => scene)
      )
  }

  editScene(id: number, scene: Scene) : Observable<Scene>{
    return this.httpClient.put<Scene>(this.API_URL + '/scenes/' + id, scene)
      .pipe(
        map((scene: Scene) => scene)
      )
  }

  getScene(id: number) : Observable<Scene>{
    return this.httpClient.get<Scene>(this.API_URL + '/scenes/' + id)
      .pipe(
        map((scene: Scene) => scene)
      )
  }

  deleteScene(id: number) : Observable<void> {
    return this.httpClient.delete<any>(this.API_URL + '/scenes/' + id);
  }
}
