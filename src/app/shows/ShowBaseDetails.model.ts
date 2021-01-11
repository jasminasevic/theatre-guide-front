import { IImage } from "../shared/interfaces/IImage";

export class ShowBaseDetails {
  id: number;
  title: String;
  theatreName: String;
  theatreId: number;
  showImageDtos: IImage[];

  constructor(show){
    this.id = show.id;
    this.title = show.title || '';
    this.theatreName = show.theatreName || '';
    this.theatreId = show.theatreId || '';
    this.showImageDtos = show.theatreImage || '';
  }
}