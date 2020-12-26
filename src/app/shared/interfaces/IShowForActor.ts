import { IImage } from "./IImage";

export interface IShowForActor {
  id: number;
  title: string;
  categoryName: string;
  showImageDtos: IImage;
}
