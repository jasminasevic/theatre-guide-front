import { IImage } from '../shared/interfaces/IImage';
import { IPricePerSector } from '../shared/interfaces/IPricePerSector';

export class RepertoireAllDetails {
    id: number;
    showName: String;
    showId: number;
    theatreId: number;
    theatreName: String;
    showDate: Date;
    category: String;
    categoryId: number;
    sceneName: String;
    sceneId: number;
    premiereDate: Date;
    description: String;
    getPriceDtos: IPricePerSector[];
    getImageDtos: IImage[];
    duration: number;
  
    constructor(play){
      this.id = play.id;
      this.showName = play.title || '';
      this.showId = play.showId || '';
      this.theatreName = play.theatreName || '';
      this.theatreId = play.theatreId || '';
      this.showDate = play.date || '';
      this.category = play.category || '';
      this.categoryId = play.categoryId || '';
      this.sceneName = play.sceneName || '';
      this.sceneId = play.sceneId || '';
      this.premiereDate = play.premiereDate || '';
      this.description = play.description || '';
      this.getPriceDtos = play.getPriceDtos || '';
      this.getImageDtos = play.getImagesDto || '';
      this.duration = play.duration || '';
    }
  
} 