import { TheatreBaseDetails } from '../../theatres/TheatreBaseDetails.model';

export interface ITheatreData {
  data: TheatreBaseDetails[],
  pageNumber: number,
  totalCount: number,
  pagesCount: number
}
