import { IImage } from "../../shared/interfaces/IImage";

export class UpcomingShows{
    id: number;
    title: String;
    theatreId: number;
    theatreName: String;
    showImage: IImage[];
    followersNumber: number;
    showDate: Date;
    
        constructor(upcomingShows){
            this.id = upcomingShows.id;
            this.title = upcomingShows.title || '';
            this.theatreId = upcomingShows.theatreId || '';
            this.theatreName = upcomingShows.theatreName || '';
            this.showImage = upcomingShows.showImage || '';
            this.followersNumber = upcomingShows.showImage || '';
            this.showDate = upcomingShows.showDate || '';
        }
}