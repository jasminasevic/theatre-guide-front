import { ActorBaseDetails } from "../../actors/ActorBaseDetails.model";

export interface IActorData {
  data: ActorBaseDetails[];
  pageNumber: number,
  totalCount: number,
  pagesCount: number
}
