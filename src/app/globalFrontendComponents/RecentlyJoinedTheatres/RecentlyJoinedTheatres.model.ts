import { IImage } from '../../shared/interfaces/IImage';

export class RecentlyJoinedTheatres {
    id: number;
    name: string;
    location: string;
    showImageDtos: IImage[];
  
    constructor(theatre){
      this.id = theatre.id;
      this.name = theatre.name || '';
      this.location = theatre.location || '';
      this.showImageDtos = theatre.theatreImage || '';
    }
} 