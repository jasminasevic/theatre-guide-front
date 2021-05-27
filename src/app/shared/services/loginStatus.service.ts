import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginStatusService {

constructor() { }

  loginStatus: boolean;

  private loginStatusSource = new BehaviorSubject<boolean>(false);
  currentLoginStatus$ = this.loginStatusSource.asObservable();

  changeLoginStatus(loginStatus: boolean) {
    this.loginStatusSource.next(loginStatus);
  }
}
