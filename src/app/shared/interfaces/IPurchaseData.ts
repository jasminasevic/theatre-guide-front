import { Purchase } from "../../adminTheatrePages/purchases/purchase.model";

export interface IPurchaseData {
    data: Purchase[];
    pageNumber: number,
    totalCount: number,
    pagesCount: number
}
