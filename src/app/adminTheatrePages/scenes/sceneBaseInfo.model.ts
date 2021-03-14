export class SceneBaseInfo {
    id: number;
    scene: string;      
    
    constructor(scene){
        this.id = scene.id;
        this.scene = scene.scene;
    }
}