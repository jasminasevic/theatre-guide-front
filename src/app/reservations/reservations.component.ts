import { Component, Input } from '@angular/core';
import { ISectorDetails } from '../shared/interfaces/ISectorDetails';
import { ModalService } from '../_modal';

@Component({
  selector: 'reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss']
})
export class ReservationsComponent {

  selectedSeatDetails: {[id: string]: ISectorDetails } = {};
  selectedSeatsCounter: number = 0;

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

  constructor(public modalService: ModalService){}

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

  setSelectedSectorDetails(seatId: string): void {
      const seatDetails = this.parseSeatDetails(seatId);
      const sectorDetails = this.sectorsWithPrices.find(element => element.sectorId == seatDetails.sectorId);
      
      this.selectedSeatDetails[seatId] = {
        ...seatDetails,
        sectorName: sectorDetails.sectorName,
        ticketPrice: Number(sectorDetails.price),
        currencyName: sectorDetails.currencyName,
      };

      console.log(this.selectedSeatDetails);
  }

  reserveTicket(e){
    console.log('button click');
    e.preventDefault();
  }

}
