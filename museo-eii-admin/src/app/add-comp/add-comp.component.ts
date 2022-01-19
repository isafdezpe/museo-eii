import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CompTypes, GenericComp, MyComponent } from '../comp';
import { ComponentService } from '../component.service';
import { Cpu } from '../cpu';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  periods: Period[];
  p: Period;

  types: String[] = Object.values(CompTypes);
  t: String;

  c: MyComponent;
  model: MyComponent;

  /*addFamousSys = false;
  textAddFamousSys = "Añadir sistema famoso que incluya este componente";*/

  constructor(private componentService: ComponentService, private periodService: PeriodService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.t = this.types[0];
    this.createModel();
    this.c = this.cloneComp(this.model);
    this.periodService.getAll().subscribe((periods: Period[]) => this.periods = periods);
    console.log(this.periods);
    const routeParams = this.route.snapshot.paramMap;
    var id = Number(routeParams.get('periodId'));
    if (id) 
      this.p = this.periods.filter((e) => e.id === id)[0];
    else 
      this.p = this.periods[0];
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

  cloneComp(c: MyComponent): MyComponent{
    if (c instanceof Cpu)
      return new Cpu(c.name, c.family, c.description, c.initYear, c.endYear, c.periodId, c.price, c.priceUnits, c.devices, c.imgNames, c.famousSystem, c.famousSystemImgName, c.programMemory, c.programMemoryUnits, 
      c.ramMemory, c.ramMemoryUnits, c.clockSpeed, c.clockSpeedUnits, c.power, c.powerUnits, c.wordSize, c.wordSizeUnits, c.transistorSize, c.passmark, c.transistors, c.id);
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
