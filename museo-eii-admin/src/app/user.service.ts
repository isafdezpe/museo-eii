import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  private userLogged =  false;

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: string, password: string) {
    return this.http.post(`${this.baseUrl}/login.php`, {user, password});
  }

  // passwordReset(user: string) {
  //   this.http.get(`${this.baseUrl}/changePassword.php?email=${user}`);
  // }

  // changePassword() {

  // }

  setToken(token: string) {
    this.cookies.set("token", token);
    this.userLogged = true;
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
    this.userLogged = false;
  }

  isLogged(): boolean {
    return this.userLogged;
  }
}
