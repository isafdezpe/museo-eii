import { Injectable } from '@angular/core';
import { Period } from './period';
import { PERIODS } from './mock-periods';
import { MyComponent } from './comp';
import { CPUS } from './mock-cpus';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {


  constructor() { }

  addPeriod(p: Period) {
    
  }

  editPeriod(p: Period) {
    
  }

  deletePeriod(p: Period) {

  }

  getPeriod(pId: number): Period {
    return PERIODS.filter((e) => e.id === pId)[0];
  }

  getAll(): Period[] {
    return PERIODS;
  }

  getComponentsFromPeriod(p: Period): MyComponent[] {
    return CPUS.filter((e) => e.periodId === p.id);
  }
}
