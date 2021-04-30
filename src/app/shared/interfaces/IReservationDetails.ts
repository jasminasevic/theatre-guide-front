import { ISeatWithEntrance } from "./ISeatWithEntrance";

export interface IReservationDetails {
    Id: number;
    UserId: number;
    RepertoireId: number;
    AddSeatDtos: ISeatWithEntrance[];
}