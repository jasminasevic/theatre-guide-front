import { IImage } from "../../shared/interfaces/IImage";

export class UpcomingPremieres {
    id: number;
    title: String;
    theatreId: number;
    theatreName: String;
    showImage: IImage[];
    showDate: Date;
    
        constructor(upcomingPremieres){
            this.id = upcomingPremieres.id;
            this.title = upcomingPremieres.title || '';
            this.theatreId = upcomingPremieres.theatreId || '';
            this.theatreName = upcomingPremieres.theatreName || '';
            this.showImage = upcomingPremieres.showImage || '';
            this.showDate = upcomingPremieres.showDate || '';
        }
}