import { of } from "rxjs";

export class UserMock {

    static userLogged = false;
    static token: String = "";
    
    login(user: string, password: string) {
        if (user == "uo257829@uniovi.es" && password == "museoinfo2022")
            return of({email: user});
        return of ({error: "Error"});
    }

    setToken(token: string) {
        UserMock.token = token;
        UserMock.userLogged = true;
    }

    public static getToken() {
        return UserMock.token;
    }

    deleteToken() {
        UserMock.token = "";
        UserMock.userLogged = false;
    }

    isLogged(): boolean {
        return UserMock.userLogged;
    }

    public static resetUser() {
        UserMock.token = "";
        UserMock.userLogged = false;
    }

}