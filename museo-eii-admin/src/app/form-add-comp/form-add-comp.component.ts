import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PERIODS } from '../mock-periods';
import { Period } from '../period';

@Component({
  selector: 'app-form-add-comp',
  templateUrl: './form-add-comp.component.html',
  styleUrls: ['./form-add-comp.component.css']
})
export class FormAddCompComponent implements OnInit {

  periods: Period[] = PERIODS;
  p: Period;

  types: String[] = ['CPU'];
  t: String;

  priceUnits: String[] = ['€', '$'];
  priceUnit: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.p = this.periods[0];
    this.t = this.types[0];
    this.priceUnit = this.priceUnits[0];
    const routeParams = this.route.snapshot.paramMap;
    var id = Number(routeParams.get('periodId'));
    if (id) 
      this.p = this.periods.filter((e) => e.id === id)[0];
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.name === p)[0];
  }

  changeType(t: string) {
    this.t = this.types.filter((e) => e === t)[0];
    //añadir elementos html para el formulario dinámicamente según el tipo
  }

  changePriceUnits(u: string) {
    this.priceUnit = this.priceUnits.filter((e) => e === u)[0];
  }

}
