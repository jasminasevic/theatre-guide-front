import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constants';
import { EmailDetails } from './emailDetails.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  public API_URL = API_URL;
  
constructor(private httpClient: HttpClient) { }

  sendEmail(email) : Observable<EmailDetails>{
    return this.httpClient.post<EmailDetails>(this.API_URL + '/contact/', email)
      .pipe(
        map((email: EmailDetails) => email)
      )
  }
}
