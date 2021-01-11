import { IActorShow } from '../shared/interfaces/IActorShow';
import { IImage } from '../shared/interfaces/IImage';

export class ShowAllDetails {
    id: number;
    title: String;
    category: String;
    categoryId: number;
    description: String;
    theatre: String;
    theatreId: number;
    scene: String;
    sceneId: number;
    directorId: number;
    duration: number;
    premiereDate: Date;
    writer: String;
    showImageDtos: IImage;
    actorShowDtos: IActorShow;
    followersNumber: number;
    directorFirstName: string;
    directorLastName: string;
    address: string;
  
    constructor(show){
      this.id = show.id;
      this.title = show.title || '';
      this.category = show.category || '';
      this.categoryId = show.categoryId || '';
      this.description = show.description || '';
      this.theatre = show.theatre || '';
      this.theatreId = show.theatreId || '';
      this.scene = show.scene || '';
      this.sceneId = show.sceneId || '';
      this.directorId = show.directorId || '';
      this.duration = show.duration || '';
      this.premiereDate = show.premiereDate || '';
      this.writer = show.writer || '';
      this.showImageDtos = show.showImageDtos || '';
      this.actorShowDtos = show.actorShowsDto || '';
      this.followersNumber = show.followersNumber || '';
      this.directorFirstName = show.directorFirstName || '';
      this.directorLastName = show.directorLastName || '';
    }
}