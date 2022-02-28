import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompDevices, CompTypes, GenericComp, MyComponent } from '../comp';
import { ComponentService } from '../component.service';
import { Cpu } from '../cpu';
import { Period } from '../period';
import { PeriodService } from '../period.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  imgUrl = environment.baseImgUrl;

  c: MyComponent;
  p: Period;

  type: String;

  constructor(private route: ActivatedRoute, private componentService: ComponentService, private periodService: PeriodService, private _location: Location) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.getComponent(idFromRoute);
  }
  
  getComponent(id: number) {
	  this.componentService.getComponent(id).subscribe((c: Cpu) => {
      console.log(c);
      if (c.component_type == CompTypes.cpu) {
        this.c = new Cpu(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img,
        c.program_memory, c.program_memory_units, c.ram_memory, c.ram_memory_units,c.clockspeed, c.clockspeed_units, c.cpu_power, c.cpu_power_units, c.wordsize, c.wordsize_units, c.transistor_size, c.passmark, c.transistors, id);
        this.type = CompTypes.cpu;
      } else {
        this.c = new GenericComp(c.component_name, c.component_family, c.component_description, c.component_year_init, c.component_year_end, c.component_period_id, c.component_price, c.component_price_units, c.component_devices.split(','), [], c.famous_system, c.famous_system_img, c.component_type, id);
        this.type = CompTypes.generic;
      }
      console.log(this.c)
      console.log(this.type)
      this.getPeriod(this.c.component_period_id)
    }); 
  }

  getPeriod(id: number) {
    this.periodService.getPeriod(id).subscribe((period: Period) => this.p = period);
  }


  isPortable() {
    return this.c.component_devices.split(',').includes(CompDevices.portable);
  }

  isDesktop() {
    return this.c.component_devices.split(',').includes(CompDevices.desktop);
  }

  goBack() {
    this._location.back();
  }

}
