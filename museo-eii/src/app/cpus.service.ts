import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getComponent(cId: number) {
    return this.http.get(`${this.baseUrl}/getComp.php?idComp=${cId}`);
  }

  getComponentsFromPeriod(pId: number) {
    return this.http.get(`${this.baseUrl}/getCompsPeriod.php?idPeriod=${pId}`);
  }

  getComponentImgs(cId: number) {
    return this.http.get(`${this.baseUrl}/getCompImgs.php?idComp=${cId}`);
  }

}
