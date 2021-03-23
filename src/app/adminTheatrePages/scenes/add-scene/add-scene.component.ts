import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { ScenesService } from '../scenes.service';

@Component({
  selector: 'app-add-scene',
  templateUrl: './add-scene.component.html',
  styleUrls: ['./add-scene.component.scss']
})
export class AddSceneComponent implements OnInit {

  isSubmitted: boolean = false;
  sceneForm: FormGroup;
  theatreId;

  constructor(private sceneService: ScenesService,
    private fb: FormBuilder,
    private token: TokenStorageService,
    private alertify: AlertifyService,
    private router: Router) { }

  namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
  seatsPatters = "^[1-9][0-9]*$";

  ngOnInit() {
    this.sceneForm = this.fb.group({
      id: 0,
      sceneName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      addSectorDtos: this.fb.array([this.initialSectorRows()])
    });
  }

  initialSectorRows(){
    return this.fb.group({
      sectorName: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      seatCapacity: ['', [Validators.required, Validators.pattern(this.seatsPatters)]],
      rowsTotalNumber: ['', [Validators.required, Validators.pattern(this.seatsPatters)]]
    });
  }

  get formArr(){
    return this.sceneForm.get('addSectorDtos') as FormArray;
  }

  get sectorControls(){
    return this.sceneForm.controls.addSectorDtos['controls'];
  }

  addNewSector(){
    this.formArr.push(this.initialSectorRows());
  }

  deleteSectorRow(index: number){
    this.formArr.removeAt(index);
  }

  //Getter methods to access formControls
  get sceneName() { return this.sceneForm.get('sceneName'); }
  get addSectorDtos() { return this.sceneForm.get('addSectorDtos'); }

  onSubmit(){
    this.isSubmitted = true;

    this.theatreId = this.token.getTheatreId();
    
    if(!this.sceneForm.valid){
      return false;
    }

    const formData = new FormData();
    formData.append('sceneName', this.sceneName.value);
    formData.append('theatreId', this.theatreId);
    
    const sectors = this.addSectorDtos.value;

    for(let i=0; i<sectors.length; i++){
      formData.append('addSectorDtos[' + i + '][sectorName]', sectors[i].sectorName);
      formData.append('addSectorDtos[' + i + '][seatCapacity]', sectors[i].seatCapacity);
      formData.append('addSectorDtos[' + i + '][rowsTotalNumber]', sectors[i].rowsTotalNumber);
    }

    //new Response(formData).text().then(console.log);

    this.sceneService.addScene(formData)
      .subscribe(() => {
        this.alertify.success("Sucessfully added."),
        this.router.navigate(['/admin-theatre/scenes/all-scenes'])
      },
      err => {
        this.alertify.error('Something went wrong.')
      });
  }
}
