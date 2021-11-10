import { Component, Input, OnInit } from '@angular/core';
import { MyComponent } from '../comp';

@Component({
  selector: 'app-comp-inputs',
  templateUrl: './comp-inputs.component.html',
  styleUrls: ['./comp-inputs.component.css']
})
export class CompInputsComponent implements OnInit {

  @Input() model: MyComponent;

  priceUnits: String[] = ['€', '$'];
  priceUnit: String;

  constructor() { }

  ngOnInit(): void {
    this.priceUnit = this.priceUnits[0];
  }

  changePriceUnits(u: string) {
    this.priceUnit = this.priceUnits.filter((e) => e === u)[0];
  }
}
