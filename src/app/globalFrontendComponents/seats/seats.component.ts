import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SeatsComponent {

  sectorId: number;
  repertoireId: number;
  rowsTotalNumber: number;
  seatCapacity: number;
  seatsPerRow: number;
  rowsArray: number[];
  seatsArray: number[];
  unavailableSeatsList: Array<any> = [];
  obj = {};

  @Output() newSeatEvent = new EventEmitter<string>();
  @Output() removedSeatEvent = new EventEmitter<string>();

  addNewSeat(value): void {
    this.newSeatEvent.emit(value);
  }

  removeSeat(value: string): void {
    this.removedSeatEvent.emit(value);
  }

  @Input() set sectorWithSeatsStatus(sectorWithSeatsStatus: any) {
    if(sectorWithSeatsStatus){
      this.sectorId = sectorWithSeatsStatus.id;
      this.rowsTotalNumber = sectorWithSeatsStatus.rowsTotalNumber;
      this.seatCapacity = sectorWithSeatsStatus.seatCapacity;
      this.seatsPerRow = Math.floor(this.seatCapacity / this.rowsTotalNumber);
      this.rowsArray = new Array(this.rowsTotalNumber);
      this.seatsArray = new Array(this.seatsPerRow);
      
      var seatValues = [];
      seatValues = sectorWithSeatsStatus.unavailableSeatsDto;
      this.unavailableSeatsList = [];
      seatValues.forEach(element => {
        this.unavailableSeatsList.push(element.seatRowDetails);
      });


      for(let i = 0; i < this.rowsArray[0]; i += 1) {
        for (let j = 0; j < this.seatsArray[0]; j += 1) {
          const id = this.getIndex(this.sectorId, i + 1, j + 1);
          this.obj[id] = false;
        }
      }
    }
}

  getIndex(sectorId, i, j) { 
    let rowValue = Number(i + 1).toString();
    let seatValue = Number(j + 1).toString();
    let position = (sectorId + ',' + rowValue + ',' + seatValue).toString();
    return position;
  }

  changeSeatAvailability($event, seatId){
    this.obj[seatId] = $event.target.checked;
    if (this.obj[seatId]) {
      this.addNewSeat(seatId);
    } else {
      this.removeSeat(seatId);
    }
  }

}