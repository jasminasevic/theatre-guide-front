import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { IReservationDetails } from '../shared/interfaces/IReservationDetails';

@Injectable({
  providedIn: 'root'
})
export class ReservationsService {

constructor(private httpClient: HttpClient) { }

public API_URL = API_URL;

addReservation(reservation) : Observable<IReservationDetails>{
  return this.httpClient.post<IReservationDetails>(this.API_URL + '/purchases/', reservation)
    .pipe(
      map((reservation: IReservationDetails) => reservation)
    )
}

}
