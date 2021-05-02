import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { IFollower } from '../../shared/interfaces/IFollower';

@Injectable({
  providedIn: 'root'
})
export class FollowShowButtonService {

  private API_URL = API_URL;

  constructor(private httpClient: HttpClient) { }

  checkIsFollowing(userId, showId) : Observable<boolean>{
    
    let params = new HttpParams();
    params = params.append('Type', 'followersFilteredByUserId');
    params = params.append('UserId', userId);
    params = params.append('ShowId', showId);

    return this.httpClient.get<boolean>(this.API_URL + '/shows', { params })
      .pipe(
        map((isFollowingData: boolean) => isFollowingData)
      )
  } 

  followShow(follower: IFollower) : Observable<IFollower>{
    return this.httpClient.post<IFollower>(this.API_URL + '/showFollowers', follower)
      .pipe(
        map((data: IFollower) => data)
      )
  }

  unfollowShow(userId, showId) : Observable<void>{
    let params = new HttpParams();
    params = params.append('UserId', userId);
    params = params.append('ShowId', showId);

    return this.httpClient.delete<void>(this.API_URL + '/showFollowers', { params });
  }



}
