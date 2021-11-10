import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompTypes } from '../comp';
import { Cpu } from '../cpu';
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

  types: String[] = Object.values(CompTypes);
  t: String;

  model: Cpu = new Cpu(-1, '', '', '', 1970, 1990, 0, 100, '$', [], [], '', '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, 0);

  /*addFamousSys = false;
  textAddFamousSys = "Añadir sistema famoso que incluya este componente";*/

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.p = this.periods[0];
    this.t = this.types[0];
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

  /*changeAddSys() {
    this.addFamousSys = !this.addFamousSys;
    this.textAddFamousSys = (this.addFamousSys) ? "No añadir" : "Añadir sistema famoso que incluya este componente";
  }*/

  submit() {}

}
