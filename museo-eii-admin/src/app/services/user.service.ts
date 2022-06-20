import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient, private cookies: CookieService) { }

  login(user: string, password: string) {
    return this.http.post(`${this.baseUrl}/login.php`, {user, password});
  }

  setToken(token: string) {
    this.cookies.set("token", token);
    localStorage.setItem("session", JSON.stringify(token));
  }

  getToken() {
    return this.cookies.get("token");
  }

  deleteToken() {
    this.cookies.delete("token");
    localStorage.removeItem("session");
  }

  isLogged(): boolean {
    return localStorage.getItem("session") ? true : false;
  }
}
