import { IImage } from "../../shared/interfaces/IImage";

export class PopularShows{
    id: number;
    title: String;
    theatreId: number;
    theatreName: String;
    showImage: IImage[];
    followersNumber: number;
    
        constructor(popularShows){
            this.id = popularShows.id;
            this.title = popularShows.title || '';
            this.theatreId = popularShows.theatreId || '';
            this.theatreName = popularShows.theatreName || '';
            this.showImage = popularShows.showImage || '';
            this.followersNumber = popularShows.showImage || '';
        }
}