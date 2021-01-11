import { DirectorBaseDetails } from '../../directors/DirectorBaseDetails.model';

export interface IDirectorData {
  data: DirectorBaseDetails[];
  pageNumber: number,
  totalCount: number,
  pagesCount: number
}
