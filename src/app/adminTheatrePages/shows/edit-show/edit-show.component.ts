import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorBaseDetails } from 'src/app/actors/ActorBaseDetails.model';
import { ActorsService } from 'src/app/actors/actors.service';
import { DirectorBaseDetails } from 'src/app/directors/DirectorBaseDetails.model';
import { DirectorsService } from 'src/app/directors/directors.service';
import { CategoriesService } from 'src/app/globalFrontendComponents/Categories/Categories.service';
import { Category } from 'src/app/globalFrontendComponents/Categories/Category.model';
import { SceneBaseInfo } from '../../scenes/sceneBaseInfo.model';
import { ScenesService } from '../../scenes/scenes.service';
import { ConvertDateService } from '../../../shared/services/convert-date.service';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { ShowsService } from '../shows.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../show.model';
import { AlertifyService } from 'src/app/shared/services/alertify.service';

@Component({
  selector: 'app-edit-show',
  templateUrl: './edit-show.component.html',
  styleUrls: ['./edit-show.component.scss']
})
export class EditShowComponent implements OnInit {

  categoryListing: Category[];
  sceneListing: SceneBaseInfo[];
  directorListing: DirectorBaseDetails[];
  actorListing: ActorBaseDetails[];

  showForm: FormGroup;
  isSubmitted = false;
  files: File[] = [];
  filesLength: number;
  filesValidation: boolean = false;

  theatreId: any;
  showId: any;
  
  constructor(private categoryService: CategoriesService,
    private sceneService: ScenesService,
    private directorService: DirectorsService,
    private actorService: ActorsService,
    private fb: FormBuilder,
    private convertDateService: ConvertDateService,
    private token: TokenStorageService,
    private showService: ShowsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private convertDate: ConvertDateService,
    private alertify: AlertifyService) {
      this.theatreId = this.token.getTheatreId();
    }

  titlePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
  namePattern = "^[A-Z][a-zA-Z ]+$";
  durationPattern ="^[1-9][0-9]+$"

  ngOnInit() {
    this.categoryService.getCategoryList()
      .subscribe(categories => {
        this.categoryListing = categories
      });

    this.sceneService.getSceneListFilteredByTheatre()
      .subscribe(scenes => {
        this.sceneListing = scenes
      });

    this.directorService.getDirectorsList()
      .subscribe(directors => {
        this.directorListing = directors
      });

    this.actorService.getActorsList()
      .subscribe(actors => {
        this.actorListing = actors
      });


    this.showForm = this.createShowForm();

    this.showId = this.activatedRoute.snapshot.params['id'];
    this.showService.getShow(this.showId)
      .subscribe((show: Show) => {
        this.editShow(show)
      });
  }

  editShow(show){
    this.showForm.patchValue({
      title: show.title,
      categoryId: show.categoryId,
      showDescription: show.description,
      theatreId: show.theatreId,
      sceneId: show.sceneId,
      duration: show.duration,
      premiereDate: this.convertDate.formatPremiereDate(new Date(show.premiereDate)),
      writer: show.writer,
      directorId: show.directorId
    }),
    this.showForm.setControl('actorShowDtos', this.setExistingActors(show.actorShowDtos));
  }

  setExistingActors(actorsSet) : FormArray {
    const actorFormArray = new FormArray([]);
      actorsSet.forEach(a => {
        actorFormArray.push(this.fb.group({
          actorId: a.actorId,
          actorFirstName: a.actorFirstName,
          actorLastName: a.actorLastName,
          actorRoleName: a.actorRoleName,
          actorRoleDescription: a.actorRoleDescription
        }))
      });
    return actorFormArray; 
  }


  createShowForm() : FormGroup {
    return this.fb.group({
      id: 0,
      title: ['', [Validators.required, Validators.pattern(this.titlePattern)]],
      sceneId: ['', Validators.required],
      categoryId: ['', Validators.required],
      showDescription: ['', Validators.required],
      duration: ['', [Validators.required, Validators.pattern(this.durationPattern)]],
      premiereDate: ['', Validators.required],
      writer: ['', [Validators.required, Validators.pattern(this.namePattern)]],
      directorId: ['', Validators.required],
      actorShowDtos: this.fb.array([this.initialActorRows()])
    });
  }

  initialActorRows(){
    return this.fb.group({
      actorId: ['', Validators.required],
      actorRoleName: ['', Validators.required],
      actorRoleDescription: ['']
    });
  }

  get formArr(){
    return this.showForm.get('actorShowDtos') as FormArray;
  }

  get actorControls(){
    return this.showForm.controls.actorShowDtos['controls'];
  }

  addNewActor(){
    this.formArr.push(this.initialActorRows());
  }

  deleteActorRow(index: number){
    this.formArr.removeAt(index);
  }

  //Getter methods to access formControls
  get title() { return this.showForm.get('title'); }
  get categoryId() { return this.showForm.get('categoryId'); }
  get sceneId() { return this.showForm.get('sceneId'); }
  get duration() { return this.showForm.get('duration'); }
  get premiereDate() { return this.showForm.get('premiereDate'); }
  get showDescription() { return this.showForm.get('showDescription'); }
  get writer() { return this.showForm.get('writer'); }
  get directorId() { return this.showForm.get('directorId'); }
  get actorShowDtos() { return this.showForm.get('actorShowDtos')}

	onSelect(event) {
		this.files.push(...event.addedFiles);
  }

	onRemove(event) {
		this.files.splice(this.files.indexOf(event), 1);
	}

  onSubmit(){
    this.isSubmitted = true;

    if (!this.showForm.valid) {
      return false;
    }
     
    var showDate = this.showForm.get('premiereDate').value;
    var showDateTime = this.convertDateService.convertDate(showDate);
    
    const formData = new FormData();

    formData.append('title', this.showForm.get('title').value);
    formData.append('description', this.showForm.get('showDescription').value);
    formData.append('duration', this.showForm.get('duration').value);
    formData.append('contentAdvisory', 'False');
    formData.append('premiereDate', showDateTime);
    formData.append('categoryId', this.showForm.get('categoryId').value);
    formData.append('writer', this.showForm.get('writer').value);
    formData.append('directorId', this.showForm.get('directorId').value);
    formData.append('theatreId', this.theatreId);
    formData.append('sceneId', this.showForm.get('sceneId').value);

    const actors = this.showForm.get('actorShowDtos').value;

    for(let i = 0; i < actors.length; i++){
      formData.append('actorShowDtos[' + i + '][actorId]', actors[i].actorId);
      formData.append('actorShowDtos[' + i + '][actorRoleName]', actors[i].actorRoleName);
      formData.append('actorShowDtos[' + i + '][actorRoleDescription]', actors[i].actorRoleDescription);
    }

    for(var i=0; i<this.files.length; i++){
      formData.append("showImages", this.files[i]);
    }

    // new Response(formData).text().then(console.log);

    this.showService.editShow(this.showId, formData)
      .subscribe(() => {
        this.alertify.success('Succesfully edited');
        this.router.navigate(['/admin-theatre/shows/all-shows']);
      },
      () => {
        this.alertify.error('Something went wrong');
      })
    }

}
