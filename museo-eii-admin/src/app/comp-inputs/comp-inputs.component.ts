import { Component, Input, OnInit } from '@angular/core';
import { CompDevices, MyComponent } from '../comp';

@Component({
  selector: 'app-comp-inputs',
  templateUrl: './comp-inputs.component.html',
  styleUrls: ['./comp-inputs.component.css']
})
export class CompInputsComponent implements OnInit {

  @Input() model: MyComponent;

  priceUnits: string[] = ['€', '$'];

  constructor() { }

  ngOnInit(): void {
  }

  isDesktop() {
    return this.model.component_devices.split(',').includes(CompDevices.desktop);
  }

  isPortable() {
    return this.model.component_devices.split(',').includes(CompDevices.portable);
  }

  changePriceUnits(u: string) {
    this.model.component_price_units = this.priceUnits.filter((e) => e === u)[0];
  }

  onChange(portable: boolean, desktop: boolean) {
    if (portable && desktop) this.model.setDevices([CompDevices.portable, CompDevices.desktop]);
    else if (portable) this.model.setDevices([CompDevices.portable]);
    else if (desktop) this.model.setDevices([CompDevices.desktop]);
    else this.model.setDevices([]);
  }
}
