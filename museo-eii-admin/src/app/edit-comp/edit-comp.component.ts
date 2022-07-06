import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Period } from './../classes/period';
import { CompTypes, GenericComp, MyComponent, Cpu } from './../classes/comp';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ComponentService } from '../services/component.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PeriodService } from '../services/period.service';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-edit-comp',
  templateUrl: './edit-comp.component.html',
  styleUrls: ['./edit-comp.component.css']
})
export class FormEditCompComponent implements OnInit {

  imgUrl = environment.baseImgUrl; // url de la carpeta en la que se guardan las imágenes

  periods: Period[] = []; // lista de periodos existentes
  p: Period; // periodo seleccionado

  c: MyComponent; // objeto con los valores sin editar
  model: MyComponent; // objeto asignado en el formulario sobre el que se realizan los cambios
  compImgsInDB: string[] = []; // array para juntar las imágenes del componente 

  type: String; // tipo del componente (Cpu o genérico)

  images = []; // imágenes subidas a través de los inputs[file]
  imagesNames = []; // nombres de las imágenes subidas
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  }); // se le asignan las imágenes y sus nombres para luego subirlas a través del php

  constructor(public router: Router, private route: ActivatedRoute, private componentService: ComponentService, private periodService: PeriodService, private snackBar: MatSnackBar, private _location: Location, private dialog: MatDialog, private toastService: ToastrService) { }

  ngOnInit(): void {
    // saca el id del componente que se va a editar
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.getComponent(idFromRoute);
  }

  /**
   * Obtiene el componente para editarlo
   * @param id : id del componente a editar
   */
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
      if (this.c.famous_system_img) this.compImgsInDB.push(this.c.famous_system_img);
      this.getImages(this.c.component_id);
      this.getPeriods()
    } )
    
  }

  /**
   * Obtiene las imágenes del componente 
   * @param id : id del componente del que se obtienen las imágenes
   */
  getImages(id: number) {
    this.componentService.getComponentImgs(id).subscribe((imgs: {image}[]) => {
        imgs.forEach((i) => {
          this.c.component_imgs.push(i.image);
          this.compImgsInDB.push(i.image);
        });
        this.model = this.c.cloneComp();
      });
  }

  /**
   * Obtiene la lista de todos los periodos existentes y seleccioona el correspondiente al componente
   */
  getPeriods() {
    this.periodService.getAll().subscribe((periods: Period[]) =>{
      periods.forEach((p) => this.periods.push(new Period(p.period_name, p.period_trivia, p.period_details, p.period_events, p.period_id)));
      this.p = this.periods.filter((e) => e.period_id === this.c.component_period_id)[0];
      this.changePeriod(this.p.period_name)
    });
  }

  /**
   * Cambia el periodo seleccionado en el combobox
   * @param p : nombre del nuevo periodo seleccionado
   */
  changePeriod(p: string) {
    this.p = this.periods.filter((e) => e.period_name === p)[0];
    this.model.component_period_id = this.p.period_id;
  }

  /**
   * Asigna los valores necesarios para subir las imágenes a myForm: FormGroup
   * Actualiza el componente, sube las imágenes y resetea el formulario
   */
  submit() {
    this.myForm.patchValue({
      fileSource: this.images,
      name: this.imagesNames
    });
    switch(this.isValid(this.model)) {
      case -1: 
        this.toastService.error("Debe completar el formulario para guardar", "Error",  {positionClass: "toast-bottom-full-width"} );
        break;
      case -2: 
        this.toastService.error("Debe introducir valores válidos para año de inicio y de fin", "Error",  {positionClass: "toast-bottom-full-width"} );
        break;
      case -3: 
        this.toastService.error("No debe haber valores numéricos negativos", "Error",  {positionClass: "toast-bottom-full-width"} );
        break;
      case 1:
        this.componentService.editComponent(this.model).subscribe(() => {
          this.componentService.uploadComponentImgs(this.myForm).subscribe(() => {
            this.snackBar.open('Componente actualizado', 'Cerrar', { duration: 1500 });
            this.router.navigate(['/component', this.model.component_id]);
          });
          this.c = this.model.cloneComp();
        }, () => {this.toastService.error("No se ha podido editar el componente", "Error", {positionClass: "toast-bottom-full-width"} )});
        break;
    }
  }

  isValid(comp: MyComponent): number {
    const year = new Date().getFullYear();
    if (comp.component_name == "" || comp.component_family == "" || comp.component_description == "" || comp.component_year_init == null || comp.component_year_end == null || comp.component_period_id == null || comp.component_price == null || comp.component_price_units == "")
      return -1;
    if (comp.component_year_init < 1900 || comp.component_year_init > year || comp.component_year_end < comp.component_year_init || comp.component_year_end > year)
      return -2;
    if (comp.component_price < 0)
      return -3;
    
    if (comp instanceof Cpu) {
      if (comp.program_memory == null || comp.ram_memory == null || comp.clockspeed == null || comp.cpu_power == null || comp.wordsize == null || comp.transistor_size == null || comp.passmark == null || comp.transistors == null)
        return -1;
      if (comp.program_memory < 0 || comp.ram_memory < 0 || comp.clockspeed < 0 || comp.cpu_power < 0 || comp.wordsize < 0 || comp.transistor_size < 0 || comp.passmark < 0 || comp.transistors < 0)
        return -3;
    }
      
    return 1;
  }

  /**
   * Cambia todos los campos del formulario a su valor inicial
   */
  resetForm() {
    this.images = [];
    this.imagesNames = [];
    this.model = this.c.cloneComp();
    this.compImgsInDB  = [];
    this.compImgsInDB.push(this.c.famous_system_img);
    this.c.component_imgs.forEach((i) => this.compImgsInDB.push(i));
  }

  /**
   * Vuelve a la página anterior. Si no se han guardado los cambios se muestra un diálogo para continuar o no
   */
  goBack() {
    if (this.isEdited())
      this.dialog
      .open(ConfirmationDialogComponent, {data: "No se han guardado los cambios realizados en el formulario, ¿desea continuar?"})
      .afterClosed()
      .subscribe((confirmed: boolean) => {if (confirmed) this._location.back();});
    else
    this._location.back();
  }

  /**
   * 
   * @returns si se ha editado el formulario
   */
  isEdited() {
    if (this.c === undefined && this.model === undefined)
      return false;
      
    return !this.c.equals(this.model);
  }

  /**
   * Elimina una imagen de entre las existentes del componente o del sistema famoso
   * @param name : nombre de la imagen que se va a eliminar
   */
  removeImage(name: string) {
    if (this.model.famous_system_img === name) this.model.famous_system_img = "";
    this.model.component_imgs.forEach((img, index) => {
      if (img === name) {
        this.model.component_imgs.splice(index,1);
      }
    });
    this.compImgsInDB.forEach((img, index) => {
      if (img === name) {
        this.compImgsInDB.splice(index,1);
      }
    });
  }
  
}
