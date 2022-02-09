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
    const routeParams = this.route.snapshot.paramMap;
    var id = Number(routeParams.get('periodId'));
    console.log(id);
    this.getPeriods(id);
  }

  createModel() {
    if (this.t == CompTypes.cpu)
      this.model = (this.model !== undefined) ? 
      new Cpu(this.model.component_name, this.model.component_family, this.model.component_description, this.model.component_year_init, this.model.component_year_end, this.model.component_period_id, this.model.component_price, this.model.component_price_units, this.model.component_devices.split(','), this.model.component_imgs, this.model.famous_system, this.model.famous_system_img, 0, '', 0, '', 0, '', 0, '', 0, '', 0, 0, 0) 
      : new Cpu('', '', '', 1970, 1990, 0, 100, '$', [], [], '', '', 0, '', 0, '', 0, '', 0, '', 0, '', 0, 0, 0); 
    else 
      this.model = (this.model !== undefined) ?
      new GenericComp(this.model.component_name, this.model.component_family, this.model.component_description, this.model.component_year_init, this.model.component_year_end, this.model.component_period_id, this.model.component_price, this.model.component_price_units, this.model.component_devices.split(','), this.model.component_imgs, this.model.famous_system, this.model.famous_system_img, CompTypes.generic)
      : new GenericComp('', '', '', 1970, 1990, 0, 100, '$', [], [], '', '', CompTypes.generic);
  }

  getPeriods(id: Number) {
    this.periodService.getAll().subscribe((periods: Period[]) => {
      this.periods = periods;
      if (id != 0) 
        this.p = this.periods.filter((e) => e.period_id === id)[0];
      else 
        this.p = this.periods[0];
      this.changePeriod(this.p.period_name);
    });
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.period_name === p)[0];
  }

  changeType(t: string) {
    this.t = this.types.filter((e) => e === t)[0];
    this.createModel();
  }

  cloneComp(c: MyComponent): MyComponent{
    if (c instanceof Cpu)
      return new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), c.component_imgs, c.famous_system, c.famous_system_img, c.programMemory, c.programMemoryUnits, 
      c.ramMemory, c.ramMemoryUnits, c.clockSpeed, c.clockSpeedUnits, c.power, c.powerUnits, c.wordSize, c.wordSizeUnits, c.transistorSize, c.passmark, c.transistors, c.component_id);
  }

  /*changeAddSys() {
    this.addFamousSys = !this.addFamousSys;
    this.textAddFamousSys = (this.addFamousSys) ? "No añadir" : "Añadir sistema famoso que incluya este componente";
  }*/

  submit() {
    this.componentService.addComponent(this.model).subscribe(() => {
      this.snackBar.open('Componente guardado', undefined, {duration:1500})
    });
  }

}
