import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { CompDevices, CompTypes, MyComponent, Cpu, GenericComp } from '../comp';
import { ComponentService } from '../cpus.service';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-comp-details',
  templateUrl: './comp-details.component.html',
  styleUrls: ['./comp-details.component.css']
})
export class CompDetailsComponent implements OnInit {

  imgUrl = environment.baseImgUrl;

  comp: MyComponent;
  compsFromPeriod: MyComponent[] = [];
  periodName: string = '';
  type: String;

  imageObject: Array<object> = []; // imágenes a mostrar en la galería

  constructor(private route: ActivatedRoute,private compService: ComponentService, private periodService: PeriodService) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('id'));

    this.getComp(idFromRoute);
    this.getCompsFromPeriod();
    this.getPeriodName();
    this.type = this.checkType();
  }

  checkType(): String {
    if (this.comp instanceof Cpu)
      return CompTypes.cpu;
    else
      return CompTypes.generic;
  }

  getComp(id: number) {
    this.compService.getComponent(id).subscribe((c: Cpu) => {
      if (c.component_type == CompTypes.cpu) {
        this.comp = new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img,
        c.program_memory, c.program_memory_units, c.ram_memory, c.ram_memory_units,c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, id);
        this.type = CompTypes.cpu;
      } else {
        this.comp = new GenericComp(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img, c.component_type, id);
        this.type = CompTypes.generic;
      }
      this.getImages(this.comp.component_id);
      this.getPeriodName();
      console.log(this.comp)
    });
  }

  /**
   * Obtiene las imágenes del componente 
   * @param id : id del componente del que se obtienen las imágenes
   */
   getImages(id: number) {
    this.compService.getComponentImgs(id).subscribe((imgs: {image}[]) => {
      console.log(imgs);
      imgs.forEach((i) => {
        this.comp.component_imgs.push(i.image);
        this.imageObject.push({image: this.imgUrl + i.image, thumbImage: this.imgUrl + i.image})
      })
    });
  }

  getCompsFromPeriod() {
    this.compService.getComponentsFromPeriod(this.comp.component_period_id).subscribe((comps: MyComponent[]) => this.compsFromPeriod = comps);
  }

  getPeriodName() {
    this.periodService.getPeriod(this.comp.component_period_id).subscribe((p: Period) => this.periodName = p.period_name);
  }

  isPortable() {
    return this.comp.component_devices.split(',').includes(CompDevices.portable);
  }

  isDesktop() {
    return this.comp.component_devices.split(',').includes(CompDevices.desktop);
  }

  refresh(): void {
    window.location.reload();
  }
}
