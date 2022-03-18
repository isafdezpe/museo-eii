import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  periods: Period[] = [];
  p: Period;

  types: String[] = Object.values(CompTypes);
  t: String;

  c: MyComponent;
  model: MyComponent;

  images = [];
  imagesNames = [];
   myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });

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
      periods.forEach((p) => this.periods.push(new Period(p.period_name, p.period_trivia, p.period_details, p.period_events, p.period_id)));
      if (id != 0) 
        this.p = this.periods.filter((e) => e.period_id === id)[0];
      else 
        this.p = this.periods[0];
      this.changePeriod(this.p.period_name);
    });
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.period_name === p)[0];
    console.log(this.p)
  }

  changeType(t: string) {
    this.t = this.types.filter((e) => e === t)[0];
    this.createModel();
  }

  cloneComp(c: MyComponent): MyComponent{
    if (c instanceof Cpu)
      return new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), c.component_imgs, c.famous_system, c.famous_system_img, c.program_memory, c.program_memory_units, 
      c.ram_memory, c.ram_memory_units, c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, c.component_id);
  }

  /*changeAddSys() {
    this.addFamousSys = !this.addFamousSys;
    this.textAddFamousSys = (this.addFamousSys) ? "No añadir" : "Añadir sistema famoso que incluya este componente";
  }*/

  resetForm() {
    this.images = [];
    this.imagesNames = [];
    this.model = undefined;
    this.createModel();
  }
 
  submit() {
    this.model.component_period_id = this.p.period_id;
    this.myForm.patchValue({
      fileSource: this.images,
      name: this.imagesNames
    });
    this.componentService.addComponent(this.model).subscribe(() => {
      this.componentService.uploadComponentImgs(this.myForm).subscribe(() => {
        this.snackBar.open('Componente guardado', 'Cerrar');
      });
      this.resetForm();
    });
  }

}
