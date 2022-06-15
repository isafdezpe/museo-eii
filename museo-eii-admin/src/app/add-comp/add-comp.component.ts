import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompTypes, GenericComp, MyComponent, Cpu, MemoryUnits, SpeedUnits, PowerUnits, PriceUnits } from './../classes/comp';
import { ComponentService } from '../services/component.service';
import { Period } from './../classes/period';
import { PeriodService } from '../services/period.service';

@Component({
  selector: 'app-add-comp',
  templateUrl: './add-comp.component.html',
  styleUrls: ['./add-comp.component.css']
})
export class AddCompComponent implements OnInit {

  loaded = false;
 
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

  constructor(private componentService: ComponentService, private periodService: PeriodService, private snackBar: MatSnackBar, private route: ActivatedRoute, private toastService: ToastrService) { }

  ngOnInit(): void {
    this.t = this.types[0];
    this.createModel();
    this.c = this.model.cloneComp();
    this.getPeriods();
  }

  /**
   * Crea un objeto (Cpu o Genérico en función del tipo escogido) con las propiedades por defecto si model es undefined o con los valores existentes si model ya existía
   */
  createModel() {
    if (this.t == CompTypes.cpu)
      this.model = (this.model !== undefined) ? 
      new Cpu(this.model.component_name, this.model.component_family, this.model.component_description, this.model.component_year_init, this.model.component_year_end, this.model.component_period_id, this.model.component_price, this.model.component_price_units, this.model.component_devices.split(','), this.model.component_imgs, this.model.famous_system, this.model.famous_system_img, 0, MemoryUnits.bit, 0, MemoryUnits.bit, 0, SpeedUnits.herz, 0, PowerUnits.watios, 0, MemoryUnits.bit, 0, 0, 0) 
      : new Cpu('', '', '', 1970, 1990, 0, 100, PriceUnits.dolar, [], [], '', '', 0, MemoryUnits.bit, 0, MemoryUnits.bit, 0, SpeedUnits.herz, 0, PowerUnits.watios, 0, MemoryUnits.bit, 0, 0, 0); 
    else 
      this.model = (this.model !== undefined) ?
      new GenericComp(this.model.component_name, this.model.component_family, this.model.component_description, this.model.component_year_init, this.model.component_year_end, this.model.component_period_id, this.model.component_price, this.model.component_price_units, this.model.component_devices.split(','), this.model.component_imgs, this.model.famous_system, this.model.famous_system_img, CompTypes.generic)
      : new GenericComp('', '', '', 1970, 1990, 0, 100, PriceUnits.dolar, [], [], '', '', CompTypes.generic);
  }

  /**
   * Obtiene una lista de todos los periodos existentes y, si se recibe un id en la url selecciona el correspondiente, si no, selecciona el primero de la lista
   * @param id : id del periodo al que se quiere añadir el componente
   */
  getPeriods() {
    this.periodService.getAll().subscribe((periods: Period[]) => {
      periods.forEach((p) => this.periods.push(new Period(p.period_name, p.period_trivia, p.period_details, p.period_events, p.period_id)));
        this.p = this.periods[0];
      this.loaded = true;
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
    console.log(this.model)
    this.model.component_period_id = this.p.period_id;
      this.myForm.patchValue({
        fileSource: this.images,
        name: this.imagesNames
      });
    if (!this.isValid(this.model))
      this.toastService.error("Debe completar el formulario para guardar", "Error",  {positionClass: "toast-bottom-full-width"} );
    else 
      this.componentService.addComponent(this.model).subscribe(() => {
        this.componentService.uploadComponentImgs(this.myForm).subscribe(() => {
          this.snackBar.open('Componente guardado', 'Cerrar', { duration: 1500 });
        });
        this.resetForm();
      }, () => {this.toastService.error("No se ha podido añadir el componente", "Error", {positionClass: "toast-bottom-full-width"} )});
  }

  isValid(comp: MyComponent): boolean {
    const year = new Date().getFullYear();
    let valid: boolean = comp.component_name != "" && comp.component_family != "" && comp.component_description != "" 
    && comp.component_year_init != null && comp.component_year_init > 1900 && comp.component_year_init <= year && comp.component_year_end != null && comp.component_year_end >= comp.component_year_init && comp.component_year_end <= year
    && comp.component_period_id && (comp.component_price || comp.component_price == 0) && comp.component_price_units != "";
    
    if (comp instanceof Cpu) 
      valid = valid && comp.program_memory != null && comp.program_memory >= 0 && comp.ram_memory != null && comp.ram_memory >= 0 && comp.clockspeed != null && comp.clockspeed >= 0 && comp.cpu_power != null && comp.cpu_power >= 0 
      && comp.wordsize != null && comp.wordsize >= 0 && comp.transistor_size != null && comp.transistor_size >= 0 && comp.passmark != null && comp.passmark >= 0 && comp.transistors != null && comp.transistors >= 0;
    return valid;
  }

  /**
   * 
   * comp.program_memory && comp.program_memory_units && comp.ram_memory && comp.ram_memory_units 
        && comp.clockspeed && comp.clockspeed_units && comp.cpu_power && comp.cpu_power_units  && comp.wordsize && comp.wordsize_units
        && comp.transistor_size && comp.passmark && comp.transistors
   */

}
