import { UserData } from './userData.model';

export class BusinessUserData extends UserData {
    theatre: String;

    constructor(businessUser){
        super(UserData);

        this.theatre = businessUser.theatre;
    }
}