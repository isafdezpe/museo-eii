import { Component, Input, OnInit } from '@angular/core';
import { Period } from '../period';

@Component({
  selector: 'app-period-inputs',
  templateUrl: './period-inputs.component.html',
  styleUrls: ['./period-inputs.component.css']
})
export class PeriodInputsComponent implements OnInit {

  @Input() model: Period; // objeto asignado al formulario sobre el que se realizan los cambios

  constructor() { }

  ngOnInit(): void {
  }

}
