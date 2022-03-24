import { Component, Input, OnInit } from '@angular/core';
import { CompDevices, Cpu } from '../comp';

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  @Input() comp: Cpu; // componente

  constructor() { }

  ngOnInit(): void {
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

}
