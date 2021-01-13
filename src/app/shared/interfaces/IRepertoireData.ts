import { RepertoireBaseDetails } from "../../repertoires/RepertoireBaseDetails.model";

export interface IRepertoireData {
    data: RepertoireBaseDetails[];
    pageNumber: number,
    totalCount: number,
    pagesCount: number
}
