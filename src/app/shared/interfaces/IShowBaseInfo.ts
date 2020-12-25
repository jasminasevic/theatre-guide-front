import { IImage } from "./IImage";

export interface IShowBaseInfo {
    id: number;
    title: string;
    categoryName: string;
    showImageDtos: IImage;
}
