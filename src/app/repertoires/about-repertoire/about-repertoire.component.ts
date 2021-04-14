import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PopularShows } from 'src/app/globalFrontendComponents/PopularShows/PopularShows.model';
import { PopularShowsVerticalService } from 'src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service';
import { ModalService } from 'src/app/_modal';
import { RepertoireAllDetails } from '../RepertoireAllDetails.model';
import { IPricePerSector } from '../../shared/interfaces/IPricePerSector';
import { SectorsService } from '../../services/sectors.service';

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
   selectedSector: boolean = false;
   sectorWithUnavailableSeats;

   sectorId: any;
   repertoireId: any;

   shows: PopularShows[] = [];
	popularShowsTitle : string = 'Related Shows';

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
         this.sectorsWithPrices = data.repertoire.getPriceDtos
      });

      this.popularShowVerticalService.getPopularShowsFilteredByIdAndTheatre(this.theatreId, this.showId)
			.subscribe(data => {
            this.shows = data
			})

   }

   onChangeSector(value){
      this.selectedSector = true;
      this.sectorsService.getSectorWithUnavailableSeatc(this.repertoireId, value)
         .subscribe(data => {
            this.sectorWithUnavailableSeats = data,
            console.log(this.sectorWithUnavailableSeats)
         })
      console.log(this.sectorsWithPrices)
   }

}
