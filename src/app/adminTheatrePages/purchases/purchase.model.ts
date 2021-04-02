export class Purchase {
    id: number;
    showId: number;
    showTitle: string;
    username: string;
    createdAt: Date;
    showDate: Date;
    sectorName: string;
    rowNumber: number;
    seatNumber: number;
    GetPriceBasicDtos: any;
    
    constructor(purchase){
      this.id = purchase.id;
      this.showId = purchase.showId || '';
      this.showTitle = purchase.showTitle || '';
      this.username = purchase.username || '';
      this.createdAt = purchase.createdAt || '';
      this.showDate = purchase.showDate || '';
      this.sectorName = purchase.sectorName || '';
      this.rowNumber = purchase.rowNumber || '';
      this.seatNumber = purchase.seatNumber || '';
      this.GetPriceBasicDtos = purchase.GetPriceBasicDtos || '';
    }
  }