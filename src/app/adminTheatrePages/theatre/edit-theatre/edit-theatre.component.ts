import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { TheatreBaseDetails } from 'src/app/theatres/TheatreBaseDetails.model';
import { TheatreService } from '../theatre.service';

@Component({
  selector: 'app-edit-theatre',
  templateUrl: './edit-theatre.component.html',
  styleUrls: ['./edit-theatre.component.scss']
})
export class EditTheatreComponent implements OnInit {

  theatreForm: FormGroup;
  files: File[] = [];
  filesLength: number;
  filesValidation: boolean = false;

  theatreId: any;
  theatreName: string;
  isSubmitted: boolean = false;

  constructor(private fb: FormBuilder,
    private token: TokenStorageService,
    private theatreService: TheatreService,
    private router: Router,
    private alertify: AlertifyService) { 
      this.theatreId = this.token.getTheatreId();
    }

  ngOnInit() {
    this.theatreForm = this.createTheatreForm();

    this.theatreService.getTheatre(this.theatreId)
      .subscribe((theatre: TheatreBaseDetails) => {
        this.theatreName = theatre.name,
        this.editTheatre(theatre)
      });
  }

  editTheatre(theatre){
    this.theatreForm.patchValue({
      name: theatre.name,
      description: theatre.description,
      email: theatre.email,
      telephone: theatre.telephone,
      workingHours: theatre.workingHours,
      location: theatre.location
    });
  }

  namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";

  createTheatreForm() : FormGroup {
    return this.fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      description: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', Validators.required],
      workingHours: ['', Validators.required],
      location: ['', Validators.required]
    });
  }

  onSelect(event) {
		this.files.push(...event.addedFiles);
  }

	onRemove(event) {
		this.files.splice(this.files.indexOf(event), 1);
	}

  //Getter methods to access formControls
  get name() { return this.theatreForm.get('name'); }
  get email() { return this.theatreForm.get('email'); }
  get telephone() { return this.theatreForm.get('telephone'); }
  get description() { return this.theatreForm.get('description'); }
  get workingHours() { return this.theatreForm.get('workingHours'); }
  get location() { return this.theatreForm.get('location'); }

  onSubmit(){
    this.isSubmitted = true;

    if (!this.theatreForm.valid) {
      return false;
    }

    const formData = new FormData();

    formData.append('name', this.theatreForm.get('name').value);
    formData.append('description', this.theatreForm.get('description').value);
    formData.append('email', this.theatreForm.get('email').value);
    formData.append('telephone', this.theatreForm.get('telephone').value);
    formData.append('workingHours', this.theatreForm.get('workingHours').value);
    formData.append('location', this.theatreForm.get('location').value);
    formData.append('isVisible', String(true));

    for(var i=0; i<this.files.length; i++){
      formData.append("theatreImage", this.files[i]);
    }

    // new Response(formData).text().then(console.log);

    this.theatreService.editTheatre(this.theatreId, formData)
      .subscribe(() => {
        this.alertify.success('Succesfully edited');
        this.router.navigate(['/admin-theatre/dashboard']);
      },
      err => {
        this.alertify.error(err);
      })
    }

}


