import { Injectable } from '@angular/core';
import { Cpu } from './comp';
import { CPUS } from './mock-cpus';

@Injectable({
  providedIn: 'root'
})
export class CpusService {

  cpus: Cpu[] = CPUS; // mock

  constructor() { }

  getCpus(): Cpu[] {
    return this.cpus;
  }

  getCpusFromPeriod(periodId: number): Cpu[] {
    return this.cpus.filter((c) => c.component_period_id === periodId);
  }

  getCpu(id: number): Cpu {
    return this.cpus.filter((c) => c.component_id === id)[0];
  }

}
