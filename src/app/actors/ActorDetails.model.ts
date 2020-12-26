import { IImage } from "../shared/interfaces/IImage";
import { IShowForActor } from "../shared/interfaces/IShowForActor";
import { ITheatreBasic } from "../shared/interfaces/ITheatreBasic";

export class ActorDetails {
  id: number;
  actorFirstName: string;
  actorLastName: string;
  actorBiography: string;
  showImageDto: IImage[];
  actorInShow: IShowForActor[];
  theatreBasicDtos: ITheatreBasic[];

  constructor(actor){
    this.id = actor.Id;
    this.actorFirstName = actor.actorFirstName || '';
    this.actorLastName = actor.actorLastName || '';
    this.actorBiography = actor.actorBiography || '';
    this.showImageDto = actor.actorImage || undefined;
    this.actorInShow = actor.actorInShow || '';
    this.theatreBasicDtos = actor.theatreBasicDtos || '';
  }
}