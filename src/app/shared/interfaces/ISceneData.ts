import { SceneBaseInfo } from '../../adminTheatrePages/scenes/sceneBaseInfo.model';

export interface ISceneData {
    data: SceneBaseInfo[];
    pageNumber: number,
    totalCount: number,
    pagesCount: number
}
