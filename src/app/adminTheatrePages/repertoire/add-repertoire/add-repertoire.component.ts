import { Component, OnInit } from '@angular/core';
import { ShowsService } from '../../shows/shows.service';
import { ShowListForRepertoire } from '../../shows/ShowListForRepertoire.model';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../currencies/currency.model';
import { CurrenciesService } from '../../currencies/currencies.service';
import { ShowForRepertoire } from '../../shows/showForRepertoire.model';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { ConvertDateService } from 'src/app/shared/services/convert-date.service';
import { RepertoiresService } from '../repertoires.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { Router } from '@angular/router';
import { IS_PREMIERE } from '../../../app.constants';
import { CheckIsTheatreDataAddeedService } from 'src/app/shared/services/checkIsTheatreDataAddeed.service';

@Component({
  selector: 'app-add-repertoire',
  templateUrl: './add-repertoire.component.html',
  styleUrls: ['./add-repertoire.component.scss']
})
export class AddRepertoireComponent implements OnInit {

  showListing: ShowListForRepertoire[];
  currencyListing: Currency[];
  repertoireForm: FormGroup;
  isSubmitted: boolean = false;
  selectedShow: boolean = false;
  theatreId: any;
  isPremiere = IS_PREMIERE;

  minDate: any;

  constructor(private showService: ShowsService,
    private currencyService: CurrenciesService,
    private fb: FormBuilder,
    private token: TokenStorageService,
    private convertDateService: ConvertDateService,
    private repertoireService: RepertoiresService,
    private alertify: AlertifyService,
    private router: Router,
    private checkIsTheatreDataAddeedService: CheckIsTheatreDataAddeedService) {
      this.minDate = this.convertDateService.getMinDate();
    }

  ngOnInit() {
    this.showService.getShowsForRepertoireFilteredByTheatre()
      .subscribe(data => {
        this.showListing = data
      });

    this.currencyService.getCurrencyList()
      .subscribe(data => {
        this.currencyListing = data
      })

    this.theatreId = this.token.getTheatreId();

    this.repertoireForm = this.fb.group({
      id: 0,
      showId: ['', Validators.required],
      showDate: ['', Validators.required],
      sceneName: [''],
      isPremiere: [''],
      addPriceDtos: this.fb.array([this.initialSectorRows()])
    });
  }

  initialSectorRows(){
    return this.fb.group({
      sectorId: [''],
      sectorName: [''],
      ticketPrice: ['', Validators.required],
      currencyId: ['']
    });
  }

  onChangeObj($event){
    this.selectedShow = true;
    this.showService.getShowForRepertoire($event)
      .subscribe((data: ShowForRepertoire[]) => {
          this.displayShowData(data)
        }
      )
  }

  displayShowData(data){
    this.repertoireForm.patchValue({
      sceneName: data.scene,
      isPremiere: false,
    }),
    this.repertoireForm.setControl('addPriceDtos', this.setExistingSectors(data.getSectorDtos))
  }

  setExistingSectors(sectorSets) : FormArray {
    const sectorFormArray = new FormArray([]);
    sectorSets.forEach(s => {
      sectorFormArray.push(this.fb.group({
        sectorName: s.sectorName,
        sectorId: s.id,
        ticketPrice: null,
        currencyId: 2
      }));
    });
    return sectorFormArray;
  }

  //Getter methods to access formControls
  get showId() { return this.repertoireForm.get('showId'); }
  get showDate() { return this.repertoireForm.get('showDate'); }
  get premiere() { return this.repertoireForm.get('isPremiere'); }

  get sectorControls(){
    return (<FormArray>this.repertoireForm.controls.addPriceDtos['controls']);
  }

  
  onSubmit(){
    this.isSubmitted = true;

    if(!this.repertoireForm.valid){
      return false;
    }

    let showId = this.repertoireForm.get('showId').value;
    
    const formData = new FormData();

    var showDate = this.repertoireForm.get('showDate').value;
    var showDateTime = this.convertDateService.convertDate(showDate);

    formData.append('ShowId', this.repertoireForm.get('showId').value);
    formData.append('TheatreId', this.theatreId);
    formData.append('ShowDate', showDateTime);
    formData.append('IsPremiere', this.repertoireForm.get('isPremiere').value);

    const prices = this.repertoireForm.get('addPriceDtos').value;

    for(let i = 0; i < prices.length; i++){
      formData.append('AddPriceDtos[' + i + '][SectorId]', prices[i].sectorId);
      formData.append('AddPriceDtos[' + i + '][TicketPrice]', prices[i].ticketPrice);
      formData.append('AddPriceDtos[' + i + '][CurrencyId]', prices[i].currencyId)
    }

    //new Response(formData).text().then(console.log);

    this.repertoireService.addRepertoire(formData)
      .subscribe(() =>{
        this.alertify.success("Sucessfully added."),
        this.checkIsTheatreDataAddeedService.changeRerertoireAddedStatus(true);
        this.router.navigate(['/admin-theatre/repertoire/all-repertoires'])
      },
      err => {
        this.alertify.error(err);
      });
  }

}
