import { Injectable } from '@angular/core';
import { Period } from './period';
import { PERIODS } from './mock-periods';
import { MyComponent } from './comp';
import { CPUS } from './mock-cpus';
import { ComponentService } from './component.service';

@Injectable({
  providedIn: 'root'
})
export class PeriodService {


  constructor(private componentService: ComponentService) { }

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
    return this.componentService.getAll().filter((e) => e.periodId === p.id);
  }
}
