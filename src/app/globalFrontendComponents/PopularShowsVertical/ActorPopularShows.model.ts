import { PopularShows } from '../PopularShows/PopularShows.model';

export class ActorPopularShows {
    getPopularShowsDtos: PopularShows[]; 

    constructor(actorPopularShows){
        this.getPopularShowsDtos = actorPopularShows.getPopularShowsDtos;
    } 
}