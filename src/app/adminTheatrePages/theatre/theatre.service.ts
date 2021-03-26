import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from 'src/app/app.constants';
import { Theatre } from './theatre.model';

@Injectable({
  providedIn: 'root'
})
export class TheatreService {

constructor(private httpClient: HttpClient) { }

private API_URL = API_URL;

getTheatre(theatreId) : Observable<Theatre>{

  let params = new HttpParams();
  params = params.append('type', 'baseInfo');

  return this.httpClient.get<Theatre>(this.API_URL + '/theatres/' + theatreId, { params })
    .pipe(
      map((theatre: Theatre) => theatre)
    )
  }

editTheatre(id: number, theatre) : Observable<void>{
  return this.httpClient.put<void>(this.API_URL + '/theatres/' + id, theatre)
    .pipe(
      map(theatre => theatre)
    )
  } 

}
