import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Cpu } from '../cpu';
import { Period } from '../period';
import { CompTypes, GenericComp, MyComponent } from '../comp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentService } from '../component.service';
import { ActivatedRoute } from '@angular/router';
import { PeriodService } from '../period.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class FormEditCompComponent implements OnInit {

  periods: Period[] = [];
  p: Period;

  priceUnits: String[] = ['€', '$'];
  priceUnit: String;

  c: MyComponent;
  model: MyComponent;

  type: String;

  constructor(private route: ActivatedRoute, private componentService: ComponentService, private periodService: PeriodService, private snackBar: MatSnackBar, private _location: Location, private dialog: MatDialog) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.getComponent(idFromRoute);
  }

  getComponent(id: number) {
    this.componentService.getComponent(id).subscribe((c: Cpu) => {
      if (c.component_type == CompTypes.cpu) {
        this.c = new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img,
        c.program_memory, c.program_memory_units, c.ram_memory, c.ram_memory_units,c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, id);
        this.type = CompTypes.cpu;
      } else {
        this.c = new GenericComp(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img, c.component_type, id);
        this.type = CompTypes.generic;
      }
      this.getImages(this.c.component_id);
      this.priceUnit = this.c.component_price_units;
      this.getPeriods()
    } )
    
  }

  getImages(id: number) {
    this.componentService.getComponentImgs(id).subscribe((imgs: string[]) => {
        imgs.forEach((i) => this.c.component_imgs.push(i));
        this.model = this.cloneComp(this.c);
      });
  }

  getPeriods() {
    this.periodService.getAll().subscribe((periods: Period[]) =>{
      periods.forEach((p) => this.periods.push(new Period(p.period_name, p.period_trivia, p.period_details, p.period_events, p.period_id)));
      this.p = this.periods.filter((e) => e.period_id === this.c.component_period_id)[0];
      this.changePeriod(this.p.period_name)
    });
  }

  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.period_name === p)[0];
    this.c.component_period_id = this.p.period_id;
   }

  submit() {
    if (!this.model.famous_system_img)
      this.model.famous_system_img = this.c.famous_system_img;
    this.componentService.editComponent(this.model).subscribe(() => {
      this.snackBar.open('Componente actualizado', undefined, {duration:1500});
      this.c = this.cloneComp(this.model);
    });
  }

  resetForm() {
    this.model = this.cloneComp(this.c);
  }

  cloneComp(c: MyComponent): MyComponent{
    if (c instanceof Cpu)
      return new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), c.component_imgs, c.famous_system, c.famous_system_img, c.program_memory, c.program_memory_units, 
    c.ram_memory, c.ram_memory_units, c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, c.component_id);
    else 
      return new GenericComp(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), c.component_imgs, c.famous_system, c.famous_system_img, CompTypes.generic, c.component_id);
  }
  
  goBack() {
    if (this.isEdited())
      this.dialog
      .open(ConfirmationDialogComponent, {data: "No se han guardado los cambios realizados en el formulario, ¿desea continuar?"})
      .afterClosed()
      .subscribe((confirmed: boolean) => {if (confirmed) this._location.back();});
    else
    this._location.back();
  }

  isEdited() {
    console.log(this.c)
    if (this.c === undefined && this.model === undefined)
      return false;
      
    return !this.c.equals(this.model);
  }
  
}
