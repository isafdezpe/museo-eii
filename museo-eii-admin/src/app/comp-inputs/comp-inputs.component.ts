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
    this.model.priceUnits = this.priceUnits[0];
  }

  isDesktop() {
    return this.model.devices.includes(CompDevices.desktop);
  }

  isPortable() {
    return this.model.devices.includes(CompDevices.portable);
  }

  changePriceUnits(u: string) {
    this.model.priceUnits = this.priceUnits.filter((e) => e === u)[0];
  }
}
