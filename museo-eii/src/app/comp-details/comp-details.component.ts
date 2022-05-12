import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'angular-gallery';
import { environment } from '../../environments/environment';
import { CompDevices, CompTypes, MyComponent, Cpu, GenericComp } from '../comp';
import { ComponentService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css'],
})
export class CompDetailsComponent implements OnInit {

  imgUrl = environment.baseImgUrl; // url de la carpeta en la que se guardan las imágenes

  comp: MyComponent; // componente
  compsFromPeriod: MyComponent[] = []; // otros componentes del periodo
  type: CompTypes; // tipo del componente

  previousPeriod: Period; // periodo anterior al del componente
  nextPeriod: Period; // periodo siguiente al del componente
  period: Period | undefined; // periodo al que pertenece el componente

  constructor(private route: ActivatedRoute,private compService: ComponentService, private periodService: PeriodService, private gallery: Gallery) { 
    // recargar el componente cuando cambian los parámetros de la url
    route.params.subscribe(() => {
      // saca el id del componente
      const routeParams = this.route.snapshot.paramMap;
      const idFromRoute = Number(routeParams.get('id'));
  
      this.getComp(idFromRoute);
      
    })
  }

  ngOnInit(): void { }

  /**
   * Obtiene el componente 
   * @param id : id del componente 
   */
  getComp(id: number) {
    this.compService.getComponent(id).subscribe((c: Cpu) => {
      console.log(c)
      if (c.component_type == CompTypes.cpu) {
        this.comp = new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img,
        c.program_memory, c.program_memory_units, c.ram_memory, c.ram_memory_units,c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, id);
        this.type = CompTypes.cpu;
      } else {
        this.comp = new GenericComp(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img, c.component_type, id);
        this.type = CompTypes.generic;
      }
      this.getImages(this.comp.component_id);
      this.getPeriod(this.comp.component_period_id);
      this.getCompsFromPeriod();        
      console.log(this.comp)
    });
  }

  /**
   * Obtiene el periodo del componente, el anterior y el siguiente
   * @param id : id del periodo al que pertenece el componente
   */
  getPeriod(id: number): void {
    this.periodService.getPeriods().subscribe((periods: Period[]) => {
      let index = 0;
      periods.forEach((p: Period) => {
        if (p.period_id === id) {
          this.period = p;
          this.previousPeriod = (index > 0) ? periods[index-1] : undefined;
          this.nextPeriod = (index < periods.length) ? periods[index+1] : undefined;
        }
        index++;
      });
    });
  }

  /**
   * Obtiene las imágenes del componente 
   * @param id : id del componente del que se obtienen las imágenes
   */
   getImages(id: number) {
    this.compService.getComponentImgs(id).subscribe((imgs: {image}[]) => {
      imgs.forEach((i) => {
        this.comp.component_imgs.push(i.image);
      })
    });
  }

  /**
   * Obtiene los otros componentes del periodo
   */
  getCompsFromPeriod() {
    this.compService.getComponentsFromPeriod(this.comp.component_period_id).subscribe((comps: MyComponent[]) => this.compsFromPeriod = comps);
  }

  /**
   * 
   * @returns si el componente es usado en dispositivos portátiles
   */
  isPortable() {
    return this.comp.component_devices.split(',').includes(CompDevices.portable);
  }

  /**
   * 
   * @returns si el componente es usado en dispositivos de escritorio
   */
  isDesktop() {
    return this.comp.component_devices.split(',').includes(CompDevices.desktop);
  }

  /**
   * Abre una galería con las imágenes del componente
   * @param index : índice de la imagen que se abre 
   */
  showGallery(index: number) {
    let imgs = [];
    this.comp.component_imgs.forEach((i) => {imgs.push({path: this.imgUrl + i});})
    let prop = {
        images: imgs,
        index 
    };
    this.gallery.load(prop);
}
}
