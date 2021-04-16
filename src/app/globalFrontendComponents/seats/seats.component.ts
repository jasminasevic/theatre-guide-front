import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { 
  }

  @Input() set sectorWithSeatsStatus(sectorWithSeatsStatus: any) {
    if(sectorWithSeatsStatus){
      console.log('vrednosti', sectorWithSeatsStatus);
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


  ngOnInit() {
  }

}

export class RowsLoop {
  
}
