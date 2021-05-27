import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Currency } from '../../currencies/currency.model';
import { ShowListForRepertoire } from '../../shows/showListForRepertoire.model';
import { IS_PREMIERE } from '../../../app.constants';
import { ShowsService } from '../../shows/shows.service';
import { CurrenciesService } from '../../currencies/currencies.service';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { ConvertDateService } from 'src/app/shared/services/convert-date.service';
import { RepertoiresService } from '../repertoires.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowForRepertoire } from '../../shows/showForRepertoire.model';


@Component({
  selector: 'app-edit-repertoire',
  templateUrl: './edit-repertoire.component.html',
  styleUrls: ['./edit-repertoire.component.scss']
})
export class EditRepertoireComponent implements OnInit {
  
  showListing: ShowListForRepertoire[];
  currencyListing: Currency[];
  repertoireForm: FormGroup;
  isSubmitted: boolean = false;
  selectedShow: boolean = false;
  theatreId: any;
  repertoireId: any;

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
    private activatedRoute: ActivatedRoute) {
      this.minDate = this.convertDateService.getMinDateTime();
    }

    ngOnInit() {
      this.showService.getShowsForRepertoireFilteredByTheatre()
        .subscribe(data => {
          this.showListing = data
        });
  
      this.currencyService.getCurrencyList()
        .subscribe(data => {
          this.currencyListing = data
        });

      this.repertoireForm = this.createRepertoireForm();
  
      this.theatreId = this.token.getTheatreId();
      this.repertoireId = this.activatedRoute.snapshot.params['id'];
      
      this.repertoireService.getRepertoire(this.repertoireId)
        .subscribe((repertoire: any) => {
          this.editRepertoire(repertoire),
          this.selectedShow = repertoire.showId
        });

    }

    editRepertoire(repertoire){
      this.repertoireForm.patchValue({
        showId: repertoire.showId,
        showName: repertoire.showName,
        showDate: repertoire.showDate,
        sceneName: repertoire.sceneName,
        isPremiere: repertoire.isPremiere
      }),
      this.repertoireForm.setControl('addPriceDtos', this.setExistingSectorsPrices(repertoire.getPriceDtos));
    }
  
    setExistingSectorsPrices(sectorPriceSets){
      const sectorPriceFormArray = new FormArray([]);
      sectorPriceSets.forEach(s => {
        sectorPriceFormArray.push(this.fb.group({
          sectorId: s.sectorId,
          sectorName: s.sectorName,
          ticketPrice: s.price,
          currencyId: s.currencyId
        }))
      });
      return sectorPriceFormArray;
    }

    counter = 0;
    onChangeObj($event){
      this.counter += 1;
      if(this.counter > 1){
      this.showService.getShowForRepertoire($event)
        .subscribe(
          (data: ShowForRepertoire[]) => {
            this.displayShowData(data)
          }
        )
      }
    }
  
    displayShowData(data){
      this.repertoireForm.patchValue({
        sceneName: data.scene,
        isPremiere: false,
      })
      this.repertoireForm.setControl('addPriceDtos', this.setExistingSectors(data.getSectorDtos))
    }
    
    setExistingSectors(sectorSets) : FormArray {
      const sectorFormArray = new FormArray([]);
      sectorSets.forEach(s => {
        sectorFormArray.push(this.fb.group({
          sectorName: s.sectorName,
          sectorId: s.id,
          ticketPrice: s.ticketPrice,
          currencyId: 1
        }));
      });
      return sectorFormArray;
    }

    createRepertoireForm() : FormGroup {
      return this.fb.group({
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

    const formData = new FormData();

    let showDate = this.repertoireForm.get('showDate').value;
    let showDateTime = this.convertDateService.convertDate(showDate);

    formData.append('Id', this.repertoireId);
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

    // new Response(formData).text().then(console.log);

    this.repertoireService.editRepertoire(this.repertoireId, formData)
      .subscribe(() =>{
        this.alertify.success("Sucessfully edited."),
        this.router.navigate(['/admin-theatre/repertoire/all-repertoires'])
      },
      err => {
        this.alertify.error(err);
      });
  }
}
