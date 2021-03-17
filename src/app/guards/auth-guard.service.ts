import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import jwtDecode, { JwtPayload } from 'jwt-decode';
import { TokenStorageService } from '../authentication/tokenStorage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

constructor(private router: Router, 
  private jwtHelper: JwtHelperService,
  private token: TokenStorageService) { }

canActivate(){
  const token = localStorage.getItem('jwt');
  let decodedToken = jwtDecode<JwtPayload>(token);
  let roleId = decodedToken['RoleId']; 

  if((roleId == 3 || roleId == 2) && !!this.token.isTokenExpired){
    return true;
  }
  this.router.navigate(['/login']);
  return false;
  }

}
