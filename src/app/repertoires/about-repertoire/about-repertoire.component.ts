import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ModalService } from 'src/app/_modal';
import { RepertoireAllDetails } from '../RepertoireAllDetails.model';
import { IPricePerSector } from '../../shared/interfaces/IPricePerSector';
import { SectorsService } from '../../services/sectors.service';
import { ISectorDetails } from '../../shared/interfaces/ISectorDetails';

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
   repertoireId: any;

   shows: PopularShows[] = [];
	popularShowsTitle : string = 'Related Shows';

   selectedSeatDetails: {[id: string]: ISectorDetails } = {};
   selectedSeatsCounter: number = 0;

   purchaseForm: FormGroup;

   constructor(private activatedRoute: ActivatedRoute,
      private popularShowVerticalService: PopularShowsVerticalService,
      public modalService: ModalService,
      private sectorsService: SectorsService,
      private fb: FormBuilder){}

   ngOnInit(){
      this.activatedRoute.data.subscribe((data: {repertoire: RepertoireAllDetails}) => {
         this.repertoire = data.repertoire,
         this.theatreId = data.repertoire.theatreId,
         this.showId = data.repertoire.showId,
         this.repertoireId = data.repertoire.id
         this.sectorsWithPrices = data.repertoire.getPriceDtos
      });

      this.popularShowVerticalService.getPopularShowsFilteredByIdAndTheatre(this.theatreId, this.showId)
			.subscribe(data => {
            this.shows = data
			})

   }

   onChangeSector($event){
      this.isSelectedSector = true;
      this.selectedSector = $event.target.value;
    
      this.sectorsService.getSectorWithUnavailableSeats(this.repertoireId, this.selectedSector)
         .subscribe(data => {
            this.sectorWithUnavailableSeats = data
         })
      
      this.purchaseForm = this.createPurchaseForm();
      }

   

   addSeat(lastSelectedSeat: string): void {
      this.setSelectedSectorDetails(lastSelectedSeat);
      this.selectedSeatsCounter += 1;
   }

   calculateTotalTicketPrice(): number {
      return Object.values(this.selectedSeatDetails)
         .reduce((totalTicketPrice: number, sectorDetails: any) => 
            totalTicketPrice += sectorDetails.ticketPrice, 0);
   }

   // getSelectedSeatSector(selectedSeat: string): string {
   //    const [sectorId] = selectedSeat.split(',');
   //    return sectorId;
   // }

   parseSeatDetails(seatDetails: string): any {
      const [sectorId, rowNumber, seatNumber] = seatDetails.split(',')
         .map((seatDetail: string) => Number(seatDetail));

      return {
         sectorId,
         rowNumber,
         seatNumber,
      }
   }

   removeSeat(seatId: string): void {
      delete this.selectedSeatDetails[seatId];
      this.selectedSeatsCounter -= 1;
   }

   setSelectedSectorDetails(id: string): void {
      const seatDetails = this.parseSeatDetails(id);
      const sectorDetails = this.sectorsWithPrices.find(element => element.sectorId == seatDetails.sectorId);
      
      this.selectedSeatDetails[id] = {
         ...seatDetails,
         sectorName: sectorDetails.sectorName,
         ticketPrice: Number(sectorDetails.price),
         currencyName: sectorDetails.currencyName,
      };
   }

   createPurchaseForm() : FormGroup {
      return this.fb.group({
         id: 0,
         repertoireId: '',
         showName: '',
         showDate: '',
         theatreName: '',
         sceneName: '',
         selectedTicketDtos: this.fb.array([this.initialSelectedTicketRows()])
      });
   }

   initialSelectedTicketRows(){
      return this.fb.group({
         sectorId: '',
         sectorName: '',
         rowNumber: '',
         seatNumber: ''
      });
   }


   onSubmit(){
      alert('Are you sure?')
      console.log('submitted');
   }
}
