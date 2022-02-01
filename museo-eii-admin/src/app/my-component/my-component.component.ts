import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { CompDevices, CompTypes, MyComponent } from '../comp';
import { ComponentService } from '../component.service';
import { Cpu } from '../cpu';
import { Period } from '../period';
import { PeriodService } from '../period.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  c: MyComponent;
  p: Period;

  type: String;

  constructor(private route: ActivatedRoute, private componentService: ComponentService, private periodService: PeriodService, private _location: Location) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
	  const idFromRoute = Number(routeParams.get('compId'));
    this.getComponent(idFromRoute);
    this.periodService.getPeriod(this.c.periodId).subscribe((period: Period) => this.p = period);
    this.type = this.checkType();
  }
  
  getComponent(id: number) {
	  this.componentService.getComponent(idFromRoute).subscribe((c) => console.log(c)); //TYPE??????????????
  }
  
  checkType(): String {
    if (this.c instanceof Cpu)
      return CompTypes.cpu;
    else
      return CompTypes.gpu;
  }

  isPortable() {
    return this.c.devices.includes(CompDevices.portable);
  }

  isDesktop() {
    return this.c.devices.includes(CompDevices.desktop);
  }

  goBack() {
    this._location.back();
  }

}
