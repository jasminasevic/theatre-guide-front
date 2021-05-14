import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'business-sign-up',
  templateUrl: './BusinessSignUp.component.html',
  styleUrls: ['./BusinessSignUp.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BusinessSignUpComponent implements OnInit {

  registerBusinessUserForm: FormGroup;
  isSuccessful: boolean = false;
  errorMessage: string = '';
  
  constructor(private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private alertify: AlertifyService) { }

  namePattern = "^[A-Z][a-zA-Z ]+$";
  addressPattern = "^[A-Z][a-zA-Z0-9, ]+$";

  ngOnInit() {
    this.registerBusinessUserForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      theatre: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      address: ['', [Validators.required, Validators.pattern(this.addressPattern)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get firstName() { return this.registerBusinessUserForm.get('firstName'); }
  get lastName() { return this.registerBusinessUserForm.get('lastName'); }
  get theatre() { return this.registerBusinessUserForm.get('theatre'); }
  get address() { return this.registerBusinessUserForm.get('address'); }
  get email() { return this.registerBusinessUserForm.get('email'); }
  get password() { return this.registerBusinessUserForm.get('password'); }

  onSubmit() : void {
    const businessUserData = {
      'firstName' : this.registerBusinessUserForm.get('firstName').value,
      'lastName' : this.registerBusinessUserForm.get('lastName').value,
      'theatre' : this.registerBusinessUserForm.get('theatre').value,
      'location' : this.registerBusinessUserForm.get('address').value,
      'username' : this.registerBusinessUserForm.get('email').value,
      'password' : this.registerBusinessUserForm.get('password').value
    }
    
    this.authenticationService.registerBusinessUser(businessUserData)
      .subscribe(data => {
        this.isSuccessful = true
      }, 
      err => {
        this.alertify.error("Something went wrong.")
      });
  }

}
