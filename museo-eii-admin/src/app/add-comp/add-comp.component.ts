import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CompTypes, GenericComp, MyComponent, Cpu } from '../comp';
import { ComponentService } from '../component.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {
 
  periods: Period[] = []; // lista de periodos existentes
  p: Period; // periodo seleccionado

  types: String[] = Object.values(CompTypes); // tipos de componentes
  t: String; // tipo de componente seleccionado

  c: MyComponent; // objeto con los valores iniciales 
  model: MyComponent; // objeto asignado en el formulario sobre el que se realizan los cambios

  images = []; // imágenes subidas a través de los inputs[file]
  imagesNames = []; // nombres de las imágenes subidas
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  }); // se le asignan las imágenes y sus nombres para luego subirlas a través del php

  constructor(private componentService: ComponentService, private periodService: PeriodService, private snackBar: MatSnackBar, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.t = this.types[0];
    this.createModel();
    this.c = this.cloneComp(this.model);
    // si hay un periodId en la ruta, se selecciona el periodo correspondiente en el combobox de periodos
    const routeParams = this.route.snapshot.paramMap;
    var id = Number(routeParams.get('periodId'));
    this.getPeriods(id);
  }

  /**
   * Crea un objeto (Cpu o Genérico en función del tipo escogido) con las propiedades por defecto si model es undefined o con los valores existentes si model ya existía
   */
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

  /**
   * 
   * @param c : componente que se quiere clonar
   * @returns componente clonado
   */
   cloneComp(c: MyComponent): MyComponent{
    if (c instanceof Cpu)
      return new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), c.component_imgs, c.famous_system, c.famous_system_img, c.program_memory, c.program_memory_units, 
    c.ram_memory, c.ram_memory_units, c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, c.component_id);
    else 
      return new GenericComp(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), c.component_imgs, c.famous_system, c.famous_system_img, CompTypes.generic, c.component_id);
  }

  /**
   * Obtiene una lista de todos los periodos existentes y, si se recibe un id en la url selecciona el correspondiente, si no, selecciona el primero de la lista
   * @param id : id del periodo al que se quiere añadir el componente
   */
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

  /**
   * Cambia el periodo seleccionado en el combobox
   * @param p : nombre del nuevo periodo seleccionado
   */
  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.period_name === p)[0];
  }

  /**
   * Cambia el tipo de componente seleccionado en el combobox
   * @param t : nuevo tipo seleccionado
   */
  changeType(t: string) {
    this.t = this.types.filter((e) => e === t)[0];
    this.createModel(); // se crea de nuevo el objeto model para que sea del nuevo tipo seleccionado
  }

  /**
   * Cambia todos los campos del formulario a su valor inicial
   */
  resetForm() {
    this.images = [];
    this.imagesNames = [];
    this.model = undefined;
    this.createModel();
  }
 
  /**
   * Asigna los valores necesarios para subir las imágenes a myForm: FormGroup
   * Inserta el nuevo componente, sube las imágenes y resetea el formulario
   */
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
