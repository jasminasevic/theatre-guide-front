import { ShowBaseDetails } from '../../shows/ShowBaseDetails.model';

export interface IShowData {
    data: ShowBaseDetails[];
    pageNumber: number,
    totalCount: number,
    pagesCount: number
}
