import { Component, Input, OnInit } from '@angular/core';
import { MyComponent, MemoryUnits, SpeedUnits, PowerUnits } from '../comp';
import { Cpu } from '../cpu';

@Component({
  selector: 'app-cpu-type-form',
  templateUrl: './cpu-type-form.component.html',
  styleUrls: ['./cpu-type-form.component.css']
})
export class CpuTypeFormComponent implements OnInit {

  @Input() model: Cpu;

  memUnits: string[] = Object.values(MemoryUnits);
  speedUnits: string[] = Object.values(SpeedUnits);
  cPowerUnits: string[] = Object.values(PowerUnits);

  constructor() { }

  ngOnInit(): void {
  }

  changeProgramMemoryUnits(u: string) {
    this.model.programMemoryUnits = this.memUnits.filter((e) => u === e)[0];
  }

  changeRamMemoryUnits(u: string) {
    this.model.ramMemoryUnits = this.memUnits.filter((e) => u === e)[0];
  }

  changeClockSpeedUnits(u: string) {
    this.model.clockSpeedUnits = this.speedUnits.filter((e) => u === e)[0];
  }

  changePowerUnits(u: string) {
    this.model.powerUnits = this.cPowerUnits.filter((e) => u === e)[0];
  }

  changeWordSizeUnits(u: string) {
    this.model.wordSizeUnits = this.memUnits.filter((e) => u === e)[0];
  }
}
