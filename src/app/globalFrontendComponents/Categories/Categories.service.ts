import { Injectable } from '@angular/core';
import { API_URL } from '../../app.constants';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { Category } from './Category.model';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

constructor(private httpClient: HttpClient) { }

  private readonly API_URL = API_URL;

  getCategoryList() : Observable<Category[]>{
    return this.httpClient.get<Category[]>(this.API_URL + '/categories')
      .pipe(
        map((category: Category[]) => category),
        catchError(err => throwError(err))
      )
  }

}
