import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ModalService } from 'src/app/_modal';
import { RepertoireAllDetails } from '../RepertoireAllDetails.model';
import { IPricePerSector } from '../../shared/interfaces/IPricePerSector';
import { SectorsService } from '../../services/sectors.service';
import { ThisExpression } from 'typescript';

@Component({
  selector: 'about-repertoire',
  templateUrl: './about-repertoire.component.html',
  styleUrls: ['./about-repertoire.component.css']
})
export class AboutRepertoireComponent implements OnInit {

   headerGallerySlider: any;
   repertoire: RepertoireAllDetails;
   theatreId: any;
   showId: any;
   sectorsWithPrices: IPricePerSector[];
   isSelectedSector: boolean = false;
   sectorWithUnavailableSeats;
   selectedSector: any;
   selectedSectorAndPrice: string;
   selectedSectorName: any;
   ticketPrice: number;
   currencyName: string;


   sectorId: any;
   repertoireId: any;

   shows: PopularShows[] = [];
	popularShowsTitle : string = 'Related Shows';

   selectedSeats: string[];

   constructor(private activatedRoute: ActivatedRoute,
      private popularShowVerticalService: PopularShowsVerticalService,
      public modalService: ModalService,
      private sectorsService: SectorsService){}

   ngOnInit(){
      this.activatedRoute.data.subscribe((data: {repertoire: RepertoireAllDetails}) => {
         this.repertoire = data.repertoire,
         this.theatreId = data.repertoire.theatreId,
         this.showId = data.repertoire.showId,
         this.repertoireId = data.repertoire.id
         this.sectorsWithPrices = data.repertoire.getPriceDtos,
         console.log(this.sectorsWithPrices);
      });

      this.popularShowVerticalService.getPopularShowsFilteredByIdAndTheatre(this.theatreId, this.showId)
			.subscribe(data => {
            this.shows = data
			})

   }

   onChangeSector($event){
      this.isSelectedSector = true;
      this.selectedSector = $event.target.value;
    
      this.sectorsWithPrices.forEach(element => {
         if(element.sectorId == this.selectedSector){
            this.selectedSectorName = element.sectorName,
            this.ticketPrice = element.price,
            this.currencyName = element.currencyName
         }
      });

      this.sectorsService.getSectorWithUnavailableSeats(this.repertoireId, this.selectedSector)
         .subscribe(data => {
            this.sectorWithUnavailableSeats = data
         })
      }

   addSeat(newSeat: string){
      this.selectedSeats = new Array<string>();
      this.selectedSeats.push(newSeat);
      console.log('selectovana sedista', this.selectedSeats);
   }

}


