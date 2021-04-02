import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { Profile } from './profile.model';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

constructor(private httpClient: HttpClient) {
  }

private API_URL = API_URL;

getUserProfile(userId) : Observable<Profile>{

  let params = new HttpParams();
  params = params.append('type', 'userFilteredByTheatre');

  return this.httpClient.get<Profile>(this.API_URL + '/users/' + userId, { params })
    .pipe(
      map((user: Profile) => user)
    )
  }

editProfile(userId, user) : Observable<void>{
  return this.httpClient.put<void>(this.API_URL + '/users/' + userId, user)
    .pipe(
      map(user => user)
    )
  } 
}
