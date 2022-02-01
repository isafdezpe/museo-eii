import { Component, Input, OnInit } from '@angular/core';
import { CompDevices } from '../comp';
import { Cpu } from '../cpu';

@Component({
  selector: 'app-cpu-details',
  templateUrl: './cpu-details.component.html',
  styleUrls: ['./cpu-details.component.css']
})
export class CpuDetailsComponent implements OnInit {

  @Input() comp: Cpu;

  constructor() { }

  ngOnInit(): void {
  }

  isPortable() {
    return this.comp.devices.split[','].includes(CompDevices.portable);
  }

  isDesktop() {
    return this.comp.devices.split[','].includes(CompDevices.desktop);
  }

}
