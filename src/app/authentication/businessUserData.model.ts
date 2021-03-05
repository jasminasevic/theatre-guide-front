import { UserData } from './userData.model';

export class BusinessUserData extends UserData {
    theatre: String;
    location: String

    constructor(businessUser){
        super(UserData);

        this.theatre = businessUser.theatre;
        this.location = businessUser.location;
    }
}