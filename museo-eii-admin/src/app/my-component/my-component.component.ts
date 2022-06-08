import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'angular-gallery';
import { Location } from '@angular/common';
import { CompDevices, CompTypes, GenericComp, MyComponent, Cpu } from '../comp';
import { ComponentService } from '../component.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  loaded = false;

  imgUrl = environment.baseImgUrl; // url de la carpeta en la que se guardan las imágenes

  c: MyComponent; // componente
  p: Period; // periodo al que pertenece el componente

  type: CompTypes; // tipo del componente

  constructor(private route: ActivatedRoute, private componentService: ComponentService, private periodService: PeriodService, private _location: Location, private gallery: Gallery) { }

  ngOnInit(): void {
    // saca el id del componente
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.getComponent(idFromRoute);
  }
  
  /**
   * Obtiene el componente 
   * @param id : id del componente 
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
      this.getImages(this.c.component_id);
      this.getPeriod(this.c.component_period_id);
    }); 
  }

  /**
   * Obtiene las imágenes del componente 
   * @param id : id del componente del que se obtienen las imágenes
   */
  getImages(id: number) {
    this.componentService.getComponentImgs(id).subscribe((imgs: {image}[]) => {
      console.log(imgs);
      imgs.forEach((i) => {
        this.c.component_imgs.push(i.image);
      })
      this.loaded = true;
    });
  }

  /**
   * Obtiene el periodo
   * @param id : id del periodo al que pertenece el componente
   */
  getPeriod(id: number) {
    this.periodService.getPeriod(id).subscribe((period: Period) => this.p = period);
  }

  /**
   * 
   * @returns si el componente es usado en dispositivos portátiles
   */
  isPortable() {
    return this.c.component_devices.split(',').includes(CompDevices.portable);
  }

  /**
   * 
   * @returns si el componente es usado en dispositivos de escritorio
   */
  isDesktop() {
    return this.c.component_devices.split(',').includes(CompDevices.desktop);
  }

  /**
   * Vuelve a la página anterior
   */
  goBack() {
    this._location.back();
  }

  /**
   * Abre una galería con las imágenes del componente
   * @param index : índice de la imagen que se abre 
   */
  showGallery(index: number) {
    let imgs = [];
    this.c.component_imgs.forEach((i) => {imgs.push({path: this.imgUrl + i});})
    let prop = {
        images: imgs,
        index 
    };
    this.gallery.load(prop);
}

}
