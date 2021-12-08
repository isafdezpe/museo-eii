import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CompTypes, GenericComp, MyComponent } from '../comp';
import { ComponentService } from '../component.service';
import { Cpu } from '../cpu';
import { PERIODS } from '../mock-periods';
import { Period } from '../period';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  periods: Period[] = PERIODS;
  p: Period;

  types: String[] = Object.values(CompTypes);
  t: String;

  model: MyComponent;

  /*addFamousSys = false;
  textAddFamousSys = "Añadir sistema famoso que incluya este componente";*/

  constructor(private componentService: ComponentService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.p = this.periods[0];
    this.t = this.types[0];
    this.createModel();
    const routeParams = this.route.snapshot.paramMap;
    var id = Number(routeParams.get('periodId'));
    if (id) 
      this.p = this.periods.filter((e) => e.id === id)[0];
  }

  createModel() {
    if (this.t == CompTypes.cpu)
      this.model = (this.model !== undefined) ? 
      new Cpu(this.model.name, this.model.family, this.model.description, this.model.initYear, this.model.endYear, this.model.periodId, this.model.price, this.model.priceUnits, this.model.devices, this.model.imgNames, this.model.famousSystem, this.model.famousSystemImgName, 0, '', 0, '', 0, '', 0, '', 0, '', 0, 0, 0) 
      : new Cpu('', '', '', 1970, 1990, 0, 100, '$', [], [], '', '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, 0, 0); 
    else 
      this.model = (this.model !== undefined) ?
      new GenericComp(this.model.name, this.model.family, this.model.description, this.model.initYear, this.model.endYear, this.model.periodId, this.model.price, this.model.priceUnits, this.model.devices, this.model.imgNames, this.model.famousSystem, this.model.famousSystemImgName)
      : new GenericComp('', '', '', 1970, 1990, 0, 100, '$', [], [], '', '');
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.name === p)[0];
  }

  changeType(t: string) {
    this.t = this.types.filter((e) => e === t)[0];
    this.createModel();
  }

  /*changeAddSys() {
    this.addFamousSys = !this.addFamousSys;
    this.textAddFamousSys = (this.addFamousSys) ? "No añadir" : "Añadir sistema famoso que incluya este componente";
  }*/

  submit() {
    /*this.componentService.addComponent(this.model).subscribe(() => {
      this.snackBar.open('Componente guardado', undefined, {duration:1500})
    });*/
  }

}
