import { Component, OnInit } from '@angular/core';
import { Cpu } from '../cpu';
import { CPUS } from '../mock-cpus';
import { PERIODS } from '../mock-periods';
import { Period } from '../period';
import { MyComponent } from '../comp';


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

  comps: MyComponent[] = [];
  c: MyComponent;
  model: MyComponent;

  constructor() { }

  ngOnInit(): void {
    this.p = this.periods[0];
    this.comps = CPUS.filter((e) => e.periodId === this.p.id);
    this.c = this.comps[0];
    this.priceUnit = this.c.priceUnits;
    this.model = this.cloneComp(this.c);
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.name === p)[0];
    this.comps = CPUS.filter((e) => e.periodId === this.p.id);
    this.c = this.comps[0];
    this.priceUnit = this.c.priceUnits;
    this.model = this.cloneComp(this.c);
  }

  changeComp(c: string) {
    this.c = this.comps.filter((e) => e.name === c)[0];
    this.priceUnit = this.c.priceUnits;
    this.model = this.cloneComp(this.c);
  }

  submit() {}

  resetForm() {
    this.model = this.cloneComp(this.c);
  }

  cloneComp(c: MyComponent): MyComponent{
    console.log(typeof(c));
    if (c instanceof Cpu)
      return new Cpu(c.id, c.name, c.family, c.description, c.initYear, c.endYear, c.periodId, c.price, c.priceUnits, c.devices, c.imgNames, c.famousSystem, c.famousSystemImgName, c.programMemory, c.programMemoryUnits, 
      c.ramMemory, c.ramMemoryUnits, c.clockSpeed, c.clockSpeedUnits, c.power, c.powerUnits, c.wordSize, c.wordSizeUnits, c.transistorSize, c.transistorSizeUnits, c.passmark, c.transistors);
  }
  
}
