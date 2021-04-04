export class Profile {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    theatreId: number;
    theatreName: string;
    roleId: number;

    constructor(profile){
        this.firstName = profile.firstName;
        this.lastName = profile.lastName;
        this.email = profile.email;
        this.password = profile.password;
        this.theatreId = profile.theatreId;
        this.theatreName = profile.theatreName;
        this.roleId = profile.roleId;
    }
}