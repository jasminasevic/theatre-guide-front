import { Credentials } from './credentials.model';

export class UserData extends Credentials {
    firstName: String;
    lastName: String; 
  
    constructor(user){
      super(Credentials);

      this.firstName = user.firstName;
      this.lastName = user.lastName;
    }
  }