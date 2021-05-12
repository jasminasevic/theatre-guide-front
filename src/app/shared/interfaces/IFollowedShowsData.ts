import { ShowBaseDetails } from 'src/app/shows/ShowBaseDetails.model';

export interface IFollowedShowsData {
  data: ShowBaseDetails[];
  pageNumber: number,
  totalCount: number,
  pagesCount: number
}
