import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailDetails } from './emailDetails.model';
import { ContactUsService } from './contact-us.service';
import { AlertifyService } from '../shared/services/alertify.service';

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm: FormGroup;
  isSubmitted: boolean = false;
  emailDetails: EmailDetails = { 
    content: ''
  };
  emailSent: boolean = false;

  namePattern = "^[A-Z][a-zA-Z ]+$";

  constructor(private fb: FormBuilder,
    private contactUsService: ContactUsService,
    private alertify: AlertifyService) { }

  ngOnInit() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      lastName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  //Getter methods to access formControls
  get firstName() { return this.contactForm.get('firstName'); }
  get lastName() { return this.contactForm.get('lastName'); }
  get email() { return this.contactForm.get('email'); }
  get subject() { return this.contactForm.get('subject'); }
  get message() { return this.contactForm.get('message'); }

  onSubmit(){
    this.isSubmitted = true;

    if(!this.contactForm.valid){
      return false;
    }

    this.mapFormValuesToEmailModel();

    this.contactUsService.sendEmail(this.emailDetails)
      .subscribe(() => {
          this.alertify.success("Email sucessfully sent."),
          this.isSubmitted = false;
          this.contactForm.reset();
        },
        err => {
          this.alertify.error(err);
      })
  }

  mapFormValuesToEmailModel(){
     this.emailDetails.content = "New email received from " 
      + this.contactForm.value.firstName + ' ' + this.contactForm.value.lastName 
      + '<br/> Email: ' + this.contactForm.value.email + '. <br/> Subject: '
      + this.contactForm.value.subject + '. <br/> Message: ' 
      + this.contactForm.value.message
  }

}
