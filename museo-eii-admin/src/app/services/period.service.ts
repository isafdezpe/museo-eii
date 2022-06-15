import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Period } from '../classes/period';
import { ComponentService } from './component.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  baseUrl = environment.baseUrl;


  constructor(private componentService: ComponentService, private http: HttpClient) { }

  addPeriod(p: Period) {
    return this.http.post(`${this.baseUrl}/postPeriod.php`, p);
  }

  editPeriod(p: Period) {
    return this.http.put(`${this.baseUrl}/updatePeriod.php`, p);
  }

  deletePeriod(p: Period) {
    return this.http.delete(`${this.baseUrl}/deletePeriod.php?idPeriod=${p.period_id}`);
  }

  getPeriod(pId: number) {
    return this.http.get(`${this.baseUrl}/getPeriod.php?idPeriod=${pId}`);
  }

  getPeriodByName(pName: string) {
    return this.http.get(`${this.baseUrl}/getPeriodName.php?namePeriod=${pName}`);
  }

  getAll() {
    return this.http.get(`${this.baseUrl}/getAllPeriod.php`);
  }
}
