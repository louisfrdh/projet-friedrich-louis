export class Client{
    id: number;
    firstname: string;
    lastname: string;
    login: string;
    password: string;

    constructor(firstname: string, lastname: string, login: string, password: string){
        this.firstname = firstname;
        this.lastname = lastname;
        this.login = login;
        this.password = password;
    }
}