import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { JwtPayload } from 'jwt-decode';
import jwtDecode from 'jwt-decode'; 
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup;
  submitted: boolean;
  invalidLogin: boolean;
   
   constructor(private formBuilder: FormBuilder,
    private authService: AuthenticationService,
    private router: Router){}

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
     this.submitted = true;

     const credentials = {
       'username' : this.loginForm.get('email').value,
       'password' : this.loginForm.get('password').value
     }

     this.authService.loginUser(credentials)
      .subscribe(response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);

        const decodedToken = jwtDecode<JwtPayload>(token);
        let roleId = decodedToken['RoleId'];

        if(roleId == 2 || roleId == 3){
          this.invalidLogin = false;
          this.router.navigate(['/admin/dashboard']);
        }

        this.invalidLogin = true;
        return;
      }, err => {
        this.invalidLogin = true;
      })
   }

}
