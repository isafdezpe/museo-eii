import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Period } from './period';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  baseUrl = environment.baseUrl;

  periods: Period[]; 

  constructor(private http: HttpClient) { }

  getPeriods() {
    return this.http.get(`${this.baseUrl}/getAllPeriod.php`);
  }

  getPeriod(pId: number) {
    return this.http.get(`${this.baseUrl}/getPeriod.php?idPeriod=${pId}`);
  }
}
