import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
   theatreId: number;
   showId: number;
   sectorsWithPrices: IPricePerSector[];
   isSelectedSector: boolean = false;
   sectorWithUnavailableSeats: any;
   selectedSector: any;
   repertoireId: number;
   lastSelectedSeat: string;
   seatId: string;

   shows: PopularShows[] = [];
	popularShowsTitle : string = 'Related Shows';

   selectedSeatDetails: {[id: string]: ISectorDetails } = {};
   selectedSeatsCounter: number = 0;

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
         console.log(this.theatreId),
         console.log(this.showId)
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
      }


   addSeat(lastSelectedSeat: string): void {
      this.lastSelectedSeat = lastSelectedSeat;
      console.log('last selected ', this.lastSelectedSeat);
      this.selectedSeatsCounter += 1;
   }

   removeSeat(seatId: string): void {
      this.seatId = seatId;
      console.log('seat id ', this.seatId)
      this.selectedSeatsCounter -= 1;
   }
}
