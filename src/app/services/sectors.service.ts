import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { ISectorWithSeats } from '../shared/interfaces/ISectorWithSeats';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

constructor(private httpClient: HttpClient) { }

public API_URL = API_URL;

getSectorWithUnavailableSeats(repertoireId, sectorId) 
: Observable<ISectorWithSeats>{
  
  let params = new HttpParams();
  params = params.append('Type', 'sectorWithUnavailableSeats');
  params = params.append('SectorId', sectorId);
  params = params.append('RepertoireId', repertoireId);

  return this.httpClient.get<ISectorWithSeats>(this.API_URL + '/sectors', { params })
    .pipe(
      map((sectors: ISectorWithSeats) => sectors)
    )}
}
