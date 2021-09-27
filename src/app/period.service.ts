import { Injectable } from '@angular/core';
import { PERIODS } from './mock-periods';
import { Period } from './period';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {

  periods: Period[] = PERIODS; // mock

  constructor() { }

  getPeriods(): Period[] {
    return this.periods;
  }

  getPeriod(id: number): Period {
    return this.periods.filter((p) => p.id === id)[0];
  }
}
