import { ISector } from '../../shared/interfaces/ISector';

export class Scene {
  id: number;
  sceneName: String;
  theatreId: number;
  addSectorDtos: ISector[];

  constructor(scene){
    this.id = scene.id;
    this.sceneName = scene.sceneName || '';
    this.theatreId = scene.theatreId || '';
    this.addSectorDtos = scene.addSectorDtos || '';
  }
}