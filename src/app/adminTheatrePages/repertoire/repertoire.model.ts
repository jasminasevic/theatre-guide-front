export class Repertoire {
    id: number;
    showId: number;
    showTitle: string;
    sceneId: number;
    sceneName: string;
    isPremiere: boolean;
    showDate: Date;
    
    constructor(repertoire){
      this.id = repertoire.id;
      this.showId = repertoire.showId || '';
      this.showTitle = repertoire.showTitle || '';
      this.sceneId = repertoire.sceneId || '';
      this.sceneName = repertoire.sceneName || '';
      this.isPremiere = repertoire.isPremiere || '';
      this.showDate = repertoire.showDate || '';
    }
  }