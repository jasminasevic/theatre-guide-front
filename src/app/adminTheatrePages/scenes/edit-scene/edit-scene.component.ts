import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { Scene } from '../scene.model';
import { ScenesService } from '../scenes.service';

@Component({
  selector: 'app-edit-scene',
  templateUrl: './edit-scene.component.html',
  styleUrls: ['./edit-scene.component.scss']
})
export class EditSceneComponent implements OnInit {

  isSubmitted: boolean = false;
  sceneForm: FormGroup;
  theatreId;
  sceneId;
  sceneDetails: Scene;

  constructor(private sceneService: ScenesService,
    private fb: FormBuilder,
    private token: TokenStorageService,
    private alertify: AlertifyService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

  namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
  seatsPatters = "^[1-9][0-9]*$";

  ngOnInit() {
    this.sceneForm = this.createSceneForm();
    this.sceneId = this.activatedRoute.snapshot.params['id'];
    this.sceneService.getScene(this.sceneId)
      .subscribe((scene: Scene) => {
        this.editScene(scene),
        this.sceneDetails = scene,
        this.theatreId = this.token.getTheatreId();
      }, err => {
        console.log(err);
      });
  }

  editScene(scene){
    this.sceneForm.patchValue({
      sceneName: scene.sceneName
    }),
    this.sceneForm.setControl('addSectorDtos', this.setExistingSectors(scene.getSectorDtos));
  }

  setExistingSectors(sectorsSet) : FormArray{
    const sectorsFormArray = new FormArray([]);
      sectorsSet.forEach(s => {
        sectorsFormArray.push(this.fb.group({
          sectorId: s.sectorId,
          sectorName: s.sectorName,
          seatCapacity: s.seatCapacity,
          rowsTotalNumber: s.rowsTotalNumber
        }))
      });
    return sectorsFormArray;
  }

  createSceneForm() : FormGroup {
    return this.fb.group({
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
    
    if(!this.sceneForm.valid){
      return false;
    }

    this.mapFormValuesToSceneModel();

    this.sceneService.editScene(this.sceneId, this.sceneDetails)
      .subscribe(() => {
        this.alertify.success("Sucessfully edited."),
        this.router.navigate(['/admin-theatre/scenes/all-scenes'])
        },
        err => {
          this.alertify.error(err);
        });
  }

  mapFormValuesToSceneModel(){
    this.sceneDetails.sceneName = this.sceneForm.value.sceneName;
    this.sceneDetails.theatreId = this.theatreId;
    this.sceneDetails.addSectorDtos = this.sceneForm.value.addSectorDtos;

    for(let i=0; i<this.sceneForm.value.addSectorDtos.length; i++)
    {
      this.sceneDetails.addSectorDtos[i].sectorName = this.sceneForm.value.addSectorDtos[i].sectorName;
      this.sceneDetails.addSectorDtos[i].seatCapacity = (this.sceneForm.value.addSectorDtos[i].seatCapacity).toString();
      this.sceneDetails.addSectorDtos[i].rowsTotalNumber = (this.sceneForm.value.addSectorDtos[i].rowsTotalNumber).toString();
    };
  }

}
