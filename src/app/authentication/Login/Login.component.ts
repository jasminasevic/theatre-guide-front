import { Component, OnInit, AfterViewInit, ViewEncapsulation, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode'; 
import { Router } from '@angular/router';
import { TokenStorageService } from '../tokenStorage.service';
import { USER_KEY } from 'src/app/app.constants';
import { AlertifyService } from 'src/app/shared/services/alertify.service';

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  isLoggedIn: boolean = false;
  isLoginFailed: boolean = false;
  isSubmitted: boolean = false;
   
   constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private tokenStorage: TokenStorageService,
    private alertify: AlertifyService){}


   ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
   }

   get f() {
    return this.loginForm.controls;
   }

   get email(){ return this.loginForm.get('email');}
   get password(){ return this.loginForm.get('password');}

   onSubmit(){

    this.isSubmitted = true;

    if(this.loginForm.invalid){
      return false;
    }
     
     const credentials = {
       'username' : this.loginForm.get('email').value,
       'password' : this.loginForm.get('password').value
     }

     this.authService.login(credentials)
      .subscribe(response => {
        const token = (<any>response).token;
        this.tokenStorage.saveToken(token);

        const decodedToken = jwtDecode<JwtPayload>(token);
        let userData = decodedToken[USER_KEY]
        let storageData = JSON.parse(userData);
        let keys = Object.keys(storageData);
        let values = keys.map(k => storageData[k]);
        let userId = values[0];
        let user = values[1];
        let firstName = values[2];
        let roleId = values[3];
        let theatreId = values[4];
       
        if(roleId == 2 || roleId == 3){
          this.tokenStorage.saveUser(decodedToken[USER_KEY]);
          this.isLoggedIn = true;
          this.tokenStorage.saveUserId(userId);
          this.tokenStorage.saveFirstName(firstName);
          this.tokenStorage.saveTheatreId(theatreId);
          this.tokenStorage.saveRoleId(roleId);

          if(roleId == 2)
          this.router.navigate(['/admin-theatre/dashboard']);

          if(roleId == 3)
          this.router.navigate(['/home']);
        }
        else{
          this.alertify.error('Wrong email or password');
          return;
        }
      }, err => {
        this.alertify.error('Wrong email or password');
      })
   }

  public logOut(){
    this.tokenStorage.logOut();
  }

}
