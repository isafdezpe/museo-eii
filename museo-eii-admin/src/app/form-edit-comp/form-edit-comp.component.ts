import { Component, OnInit } from '@angular/core';
import { Cpu } from '../cpu';
import { CPUS } from '../mock-cpus';
import { PERIODS } from '../mock-periods';
import { Period } from '../period';


@Component({
  selector: 'app-form-edit-comp',
  templateUrl: './form-edit-comp.component.html',
  styleUrls: ['./form-edit-comp.component.css']
})
export class FormEditCompComponent implements OnInit {

  periods: Period[] = PERIODS;
  p: Period;

  priceUnits: String[] = ['€', '$'];
  priceUnit: String;

  comps: Cpu[] = [];
  c: Cpu;

  constructor() { }

  ngOnInit(): void {
    this.p = this.periods[0];
    this.comps = CPUS.filter((e) => e.periodId === this.p.id);
    this.c = this.comps[0];
    this.priceUnit = this.c.priceUnits;
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.name === p)[0];
    this.comps = CPUS.filter((e) => e.periodId === this.p.id);
    this.c = this.comps[0];
    this.priceUnit = this.c.priceUnits;
  }

  changePriceUnits(u: string) {
    this.priceUnit = this.priceUnits.filter((e) => e === u)[0];
  }

  changeComp(c: string) {
    this.c = this.comps.filter((e) => e.name === c)[0];
    this.priceUnit = this.c.priceUnits;
  }

  submit() {}
  
}
