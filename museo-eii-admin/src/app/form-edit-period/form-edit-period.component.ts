import { Component, OnInit } from '@angular/core';
import { PERIODS } from '../mock-periods';
import { Period } from '../period';

@Component({
  selector: 'app-form-edit-period',
  templateUrl: './form-edit-period.component.html',
  styleUrls: ['./form-edit-period.component.css']
})
export class FormEditPeriodComponent implements OnInit {

  periods: Period[] = PERIODS;
  p: Period;
  model: Period;

  constructor() { }

  ngOnInit(): void {
    this.p = this.periods[0];
    this.model = this.clonePeriod(this.p);
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.name === p)[0];
    this.model = this.clonePeriod(this.p);
  }

  submit() {}

  resetForm() {
    this.model = this.clonePeriod(this.p);
  }

  clonePeriod(p: Period): Period {
    return new Period(p.id, p.name, p.trivia, p.details, p.events, p.famousSystems);
  }

}
