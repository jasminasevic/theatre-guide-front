import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { TokenStorageService } from '../authentication/tokenStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthTheatreGuardService implements CanActivate {

constructor(private router: Router,
  private token: TokenStorageService) { }

  canActivate(){
    const token = localStorage.getItem('jwt');
    let decodedToken = jwtDecode<JwtPayload>(token);
    let roleId = decodedToken['RoleId'];
    if((roleId == 2) && !!this.token.isTokenExpired){
      return true;
    }
    this.router.navigate(['login']);
    return false;
  }
}
