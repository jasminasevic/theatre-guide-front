import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, MinLengthValidator, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { AuthenticationService } from '../authentication.service';
import { UserData } from '../userData.model';

@Component({
  selector: 'signup',
  templateUrl: './SignUp.component.html',
  styleUrls: ['./SignUp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SignUpComponent implements OnInit{

  registerUserForm: FormGroup;
  isSuccessful: boolean = false;
  errorMessage: string = '';
  
   constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertify: AlertifyService){}

   namePattern = "^[A-Z][a-zA-Z ]+$";
   ngOnInit(){
     this.registerUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
     });
   }

   get f() {
    return this.registerUserForm.controls;
   }

   get firstName() { return this.registerUserForm.get('firstName'); }
   get lastName() { return this.registerUserForm.get('lastName'); }
   get email() { return this.registerUserForm.get('email'); }
   get password() { return this.registerUserForm.get('password'); }

   
   onSubmit() : void {
     const userData = {
      'firstName' : this.registerUserForm.get('firstName').value,
      'lastName' : this.registerUserForm.get('lastName').value,
      'username' : this.registerUserForm.get('email').value,
      'password' : this.registerUserForm.get('password').value 
    }

    this.authenticationService.registerUser(userData)
      .subscribe(data => { 
        this.isSuccessful = true
      },
      err => {
        this.alertify.error("Wrong email or password");
      });
  }
}
