import { IImage } from '../interfaces/IImage';

export interface IShowForDirector {
  id: number;
  title: string;
  categoryName: string;
  showImageDtos: IImage;
}
