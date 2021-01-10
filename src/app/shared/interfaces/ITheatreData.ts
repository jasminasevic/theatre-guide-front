import { TheatreBaseDetails } from "src/app/theatres/TheatreBaseDetails.model";

export interface ITheatreData {
  data: TheatreBaseDetails[],
  pageNumber: number,
  totalCount: number,
  pagesCount: number
}
