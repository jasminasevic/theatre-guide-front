export class DirectorBaseDetails {
    id: number;
    directorFirstName: string;
    directorLastName: string;

    constructor(director){
        this.id = director.id;
        this.directorFirstName = director.directorFirstName || '';
        this.directorLastName = director.directorLastName || ''; 
    }
} 