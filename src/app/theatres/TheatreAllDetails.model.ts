import { IImage } from '../shared/interfaces/IImage';
import { IOnRepertoire } from '../shared/interfaces/IOnRepertoire';
import { ISceneWithSectors } from '../shared/interfaces/ISceneWithSectors';
import { IShowBaseInfo } from '../shared/interfaces/IShowBaseInfo';

export class TheatreAllDetails {
  id: number;
  name: string;
  description: string;
  email: string;
  workingHours: string;
  telephone: string;
  location: string;
  isVisible: boolean;
  showImageDtos: IImage[];
  getSceneWithSectorsDtos: ISceneWithSectors[];
  showBaseInfoDtos: IShowBaseInfo[];
  getRepertoireForTheatreDtos: IOnRepertoire[];

  constructor(theatre){
    this.id = theatre.id;
    this.name = theatre.name || '';
    this.description = theatre.description || '';
    this.workingHours = theatre.workingHours || '';
    this.telephone = theatre.telephone || '';
    this.location = theatre.location || '';
    this.isVisible = theatre.isVisible || '';
    this.showImageDtos = theatre.theatreImage || '';
    this.getSceneWithSectorsDtos = theatre.getSceneWithSectorsDtos || '';
    this.showBaseInfoDtos = theatre.showBaseInfoDtos || '';
    this.getRepertoireForTheatreDtos = theatre || '';
  }
}