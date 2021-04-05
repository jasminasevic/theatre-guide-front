import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class ShowFollowersService {

  readonly API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  getShowFollowersFilteredByTheatre(theatreId) : Observable<number>{
    let params = new HttpParams();
    params = params.append('Type', 'showFollowersFilteredByTheatre');
    params = params.append('TheatreId', theatreId);

    return this.httpClient.get<number>(this.API_URL + '/showFollowers', { params })
      .pipe(
        map((followersNumber: number) => followersNumber)
      )
  }

}
