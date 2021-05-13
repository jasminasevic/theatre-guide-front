import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ModalService } from 'src/app/_modal';
import { RepertoireAllDetails } from '../RepertoireAllDetails.model';
import { IPricePerSector } from '../../shared/interfaces/IPricePerSector';
import { SectorsService } from '../../services/sectors.service';
import { ISectorDetails } from '../../shared/interfaces/ISectorDetails';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { AlertifyService } from 'src/app/shared/services/alertify.service';

@Component({
  selector: 'about-repertoire',
  templateUrl: './about-repertoire.component.html',
  styleUrls: ['./about-repertoire.component.css']
})
export class AboutRepertoireComponent implements OnInit {

   headerGallerySlider: any;
   repertoire: RepertoireAllDetails;
   theatreId: number;
   showId: number;
   sectorsWithPrices: IPricePerSector[];
   isSelectedSector: boolean = false;
   sectorWithUnavailableSeats: any;
   selectedSector: any;
   repertoireId: number;
   lastSelectedSeat: string;
   seatId: string;
   userId: number;
   pastShow: boolean = false;

   shows: PopularShows[] = [];
	popularShowsTitle : string = 'Related Shows';

   selectedSeatDetails: {[id: string]: ISectorDetails } = {};
   selectedSeatsCounter: number = 0;

   constructor(private activatedRoute: ActivatedRoute,
      private popularShowVerticalService: PopularShowsVerticalService,
      public modalService: ModalService,
      private sectorsService: SectorsService,
      private token: TokenStorageService,
      private alertify: AlertifyService){}

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
    
      let showDate = this.repertoire.showDate;
      let convertedShowDate = new Date(showDate).getTime();
      let dateNow = new Date().getTime();
      if(convertedShowDate < dateNow){
         this.pastShow = true;
      }
   }

   onReserveTicket(){
      if(this.token.getToken() != null){
         this.modalService.open('selectSeatModal');
      }
      else {
         this.alertify.warning('Please sign in to your account to proceed');
      }
   }

   onChangeSector($event){
      this.isSelectedSector = true;
      this.selectedSector = $event.target.value;
    
      this.sectorsService.getSectorWithUnavailableSeats(this.repertoireId, this.selectedSector)
         .subscribe(data => {
            this.sectorWithUnavailableSeats = data
         })
      }


   addSeat(lastSelectedSeat: string): void {
      this.lastSelectedSeat = lastSelectedSeat;
      this.selectedSeatsCounter += 1;
   }

   removeSeat(seatId: string): void {
      this.seatId = seatId;
      this.selectedSeatsCounter -= 1;
   }
}
