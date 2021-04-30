import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TokenStorageService } from 'src/app/authentication/tokenStorage.service';
import { IReservationDetails } from 'src/app/shared/interfaces/IReservationDetails';
import { ISeatInfo } from 'src/app/shared/interfaces/ISeatInfo';
import { ISeatWithEntrance } from 'src/app/shared/interfaces/ISeatWithEntrance';
import { ISelectedSeatDetails } from 'src/app/shared/interfaces/ISelectedSeatDetails';
import { AlertifyService } from 'src/app/shared/services/alertify.service';
import { ModalService } from 'src/app/_modal';
import { ReservationsService } from '../reservations.service';

@Component({
  selector: 'add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.scss']
})
export class AddReservationComponent {

  selectedSeatDetails: {[id: string]: ISelectedSeatDetails } = {};
  selectedSeatsCounter: number = 0;
  reservationDetails: IReservationDetails = {
    Id: 0,
    RepertoireId: null,
    UserId: null,
    AddSeatDtos: null
  };
  
  userId: number;
  repertoireId: number;

  @Input() repertoire; 
  @Input() sectorsWithPrices;
  @Input() set lastSelectedSeat(lastSelectedSeat: any){
    this.addSeat(lastSelectedSeat);
  };
  @Input() set seatId(seatId: any){
    if(seatId){
      this.removeSeat(seatId);
    }
  }

  constructor(public modalService: ModalService,
    private tokenService: TokenStorageService,
    private activatedRoute: ActivatedRoute,
    private reservationService: ReservationsService,
    private alertify: AlertifyService,
    private router: Router){}

  addSeat(lastSelectedSeat: string): void {
    console.log(lastSelectedSeat);
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

  parseSeatDetails(seatDetails: string): ISeatInfo {
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

  setSelectedSectorDetails(seatId: string): void {
      const seatDetails = this.parseSeatDetails(seatId);
      const sectorDetails = this.sectorsWithPrices.find(element => element.sectorId == seatDetails.sectorId);
      
      this.selectedSeatDetails[seatId] = {
        ...seatDetails,
        sectorName: sectorDetails.sectorName,
        ticketPrice: Number(sectorDetails.price),
        currencyName: sectorDetails.currencyName,
      };
  }

  reserveTicket(e){
    e.preventDefault(); 
    
    var ticketDetails = [];

    this.userId = this.tokenService.getUserId();
    this.repertoireId = this.activatedRoute.snapshot.params['id'];

    for(let selectedSeat of Object.values(this.selectedSeatDetails)){

      let seatDetails: ISeatWithEntrance = {
        sectorId: null,
        rowNumber: null,
        seatNumber: null,
        entrance: null
      }

      seatDetails.sectorId = selectedSeat.sectorId;
      seatDetails.rowNumber = selectedSeat.rowNumber;
      seatDetails.seatNumber = selectedSeat.seatNumber;
      seatDetails.entrance = 'Main';

      ticketDetails.push(seatDetails);
    }
   
    this.reservationDetails.UserId = this.userId;
    this.reservationDetails.RepertoireId = Number(this.repertoireId);
    this.reservationDetails.AddSeatDtos = ticketDetails;

    this.reservationService.addReservation(this.reservationDetails)
      .subscribe(() => {
        this.alertify.success("Sucessfully reserved."),
        this.router.navigate(['/repertoires/all-plays'])
      }, err => {
        this.alertify.error(err);
      })
  }

}
