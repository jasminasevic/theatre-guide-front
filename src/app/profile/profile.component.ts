import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from '../authentication/tokenStorage.service';
import { AlertifyService } from '../shared/services/alertify.service';
import { Profile } from './profile.model';
import { ProfileService } from './profile.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  isSubmitted: boolean = false;
  isPassSubmitted: boolean = false;
  profileForm: FormGroup;
  resetPassForm: FormGroup;
  userProfile: Profile;
  userId: number;
  userDetails: Profile;
  theatreId: number;

  constructor(private fb: FormBuilder,
    private token: TokenStorageService,
    private profileService: ProfileService,
    private router: Router,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.profileForm = this.createProfileForm();
    this.resetPassForm = this.createResetPassForm();
    this.userId = this.token.getUserId();

    this.profileService.getUserProfile(this.userId)
      .subscribe((profile: Profile) => {
        this.editProfile(profile),
        this.editPassword(profile),
        this.userDetails = profile,
        this.theatreId = profile.theatreId
      }, err => {
      console.log(err)
    })
  }

  editPassword(profile){
    this.resetPassForm.patchValue({
      password: profile.password
    });
  }

  createResetPassForm() : FormGroup {
    return this.fb.group({
      password: [{ value: '', disabled: true }],
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  editProfile(profile){
    this.profileForm.patchValue({
      firstName: profile.firstName,
      lastName: profile.lastName,
      theatreName: profile.theatreName,
      email: profile.email
    });
  }

  namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";

  createProfileForm() : FormGroup {
    return this.fb.group({
      id: 0,
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      theatreName: [{value: '', disabled: true}],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  //Getter methods to access formControls
  get firstName() { return this.profileForm.get('firstName'); }
  get lastName() { return this.profileForm.get('lastName'); }
  get email() { return this.profileForm.get('email'); }

  get password() { return this.resetPassForm.get('password'); }
  get newPassword() { return this.resetPassForm.get('newPassword'); }
  get confirmPassword() { return this.resetPassForm.get('confirmPassword'); }

  onSubmit(){
    this.isSubmitted = true;
    
    if(!this.profileForm.valid){
      return false;
    }

    this.mapFormValuesToProfileModel();

    this.profileService.editProfile(this.userId, this.userDetails)
      .subscribe(() => {
        this.alertify.success("Sucessfully updated.")
      }, err => {
        this.alertify.error(err);
      }
    );
  }

  mapFormValuesToProfileModel(){
    this.userDetails.firstName = this.profileForm.value.firstName;
    this.userDetails.lastName = this.profileForm.value.lastName;
    this.userDetails.email = this.profileForm.value.email;
  }

  onResetPass(){
    this.isPassSubmitted = true;
    
    if(!this.resetPassForm.valid){
      return false;
    }

    this.mapResetPassValuesToProfileModel();

    this.profileService.editProfile(this.userId, this.userDetails)
      .subscribe(() => {
        this.alertify.success("Password is sucessfully changed.")
      }, err => {
        this.alertify.error(err);
      }
    );

  }

  mapResetPassValuesToProfileModel(){
    this.userDetails.password = this.resetPassForm.value.newPassword;
  }


}
