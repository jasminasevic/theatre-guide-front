import { IImage } from '../shared/interfaces/IImage';

export class RepertoireBaseDetails {
  id: number;
  showId: number;
  showDate: Date;
  getImageDtos: IImage[];
  
  constructor(repertoire){
    this.id = repertoire.id;
    this.showId = repertoire.showId || '';
    this.showDate = repertoire.showDate || '';
    this.getImageDtos = repertoire.getImageDto || '';
  }
}