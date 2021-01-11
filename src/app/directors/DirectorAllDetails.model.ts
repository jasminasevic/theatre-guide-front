import { IShowForDirector } from '../shared/interfaces/IShowForDirector';
import { ITheatreBasic } from '../shared/interfaces/ITheatreBasic';

export class DirectorAllDetails {
  id: number;
  directorFirstName: string;
  directorLastName: string;
  directorBiography: string;
  showBaseInfoDtos: IShowForDirector[] | null;
  theatreBasicDtos: ITheatreBasic[];

  constructor(director){
    this.id = director.Id;
    this.directorFirstName = director.directorFirstName || '';
    this.directorLastName = director.directorLastName || '';
    this.directorBiography = director.directorBiography || '';
    this.showBaseInfoDtos = director.showForDirector || null;
    this.theatreBasicDtos = director.theatreBasicDtos;
  }
}