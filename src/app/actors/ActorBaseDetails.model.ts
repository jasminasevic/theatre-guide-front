import { IImage } from '../shared/interfaces/IImage';

export class ActorBaseDetails {
    id: number;
    actorFirstName: string;
    actorLastName: string;
    showImageDto: IImage[];

    constructor(actor){
        this.id = actor.id;
        this.actorFirstName = actor.actorFirstName || '';
        this.actorLastName = actor.actorLastName || ''; 
        this.showImageDto = actor.actorImage || '';
    }
}