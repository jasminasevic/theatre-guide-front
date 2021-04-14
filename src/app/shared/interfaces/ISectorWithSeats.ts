import { ISeat } from "./ISeat";

export interface ISectorWithSeats {
    sectorName: string;
    seatCapacity: string;
    rowsTotalNumber: string;
    unavailableSeats: ISeat[];
}
