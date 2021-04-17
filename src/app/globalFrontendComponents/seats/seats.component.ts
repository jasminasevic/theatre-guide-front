import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss']
})
export class SeatsComponent implements OnInit {

  repertoireId: number;
  rowsTotalNumber: number;
  seatCapacity: number;
  seatsPerRow: number;
  rowsArray: number[];
  seatsArray: number[];
  unavailableSeatsList: Array<any> = [];
  selectedSeats:any[];

  @Output() newSeatEvent = new EventEmitter<string>();

  addNewSeat(value){
    this.newSeatEvent.emit(value);
  }

  constructor() { 
  }

  @Input() set sectorWithSeatsStatus(sectorWithSeatsStatus: any) {
    if(sectorWithSeatsStatus){
      this.selectedSeats = new Array<string>();
      this.rowsTotalNumber = sectorWithSeatsStatus.rowsTotalNumber;
      this.seatCapacity = sectorWithSeatsStatus.seatCapacity;
      this.seatsPerRow = Math.floor(this.seatCapacity / this.rowsTotalNumber);
      this.rowsArray = new Array(this.rowsTotalNumber);
      this.seatsArray = new Array(this.seatsPerRow);

      var seatValues = sectorWithSeatsStatus.unavailableSeatsDto;
      this.unavailableSeatsList = [];
      seatValues.forEach(element => {
        this.unavailableSeatsList.push(element.seatRowDetails);
      });
    }
}

  getIndex(i, j) { 
    let rowValue = Number(i + 1).toString();
    let seatValue = Number(j + 1).toString();
    let position = (rowValue + ',' + seatValue).toString();
    return position;
  }

  getSeatId($event, id){
    if($event.target.checked){
      this.selectedSeats.push(id);
      this.addNewSeat(this.selectedSeats);
    }
    else {
      this.selectedSeats = this.selectedSeats.filter(s => s != id);
      this.addNewSeat(this.selectedSeats);
    }
  }

  ngOnInit() {
    this.selectedSeats = new Array<string>();
  }

}
