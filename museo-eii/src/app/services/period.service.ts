import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getPeriods() {
    return this.http.get(`${this.baseUrl}/getPeriodsOrdered.php`);
  }

  getPeriod(pId: number) {
    return this.http.get(`${this.baseUrl}/getPeriod.php?idPeriod=${pId}`);
  }

  getYearsPeriod(pId:number) {
    return this.http.get(`${this.baseUrl}/getYearsPeriods.php?idPeriod=${pId}`);
  }
}
