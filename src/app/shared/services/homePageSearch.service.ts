import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IHomePageSearchRepertoire } from '../interfaces/IHomePageSearchRepertoire';

@Injectable({
  providedIn: 'root'
})
export class HomePageSearchService {

  searchedParams: IHomePageSearchRepertoire = {
    location: '',
    showDate: ''
  } 
  private searchedDataSource = new BehaviorSubject(this.searchedParams);
  currentSearchedData = this.searchedDataSource.asObservable();

  constructor() { }

  changeSearchedData(searchedData: IHomePageSearchRepertoire){
    this.searchedDataSource.next(searchedData);
  }

}
