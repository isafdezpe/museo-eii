import { Component, Input, OnInit } from '@angular/core';
import { Cpu } from '../cpu';

@Component({
  selector: 'app-cpu-type-details',
  templateUrl: './cpu-type-details.component.html',
  styleUrls: ['./cpu-type-details.component.css']
})
export class CpuTypeDetailsComponent implements OnInit {

  @Input() comp: Cpu; // objeto del que mostrar los detalles

  constructor() { }

  ngOnInit(): void {
  }

}
