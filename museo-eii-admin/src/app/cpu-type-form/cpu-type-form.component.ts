import { Component, Input, OnInit } from '@angular/core';
import { MyComponent, MemoryUnits, SpeedUnits, PowerUnits, Cpu } from '../comp';

@Component({
  selector: 'app-cpu-type-form',
  templateUrl: './cpu-type-form.component.html',
  styleUrls: ['./cpu-type-form.component.css']
})
export class CpuTypeFormComponent implements OnInit {

  @Input() model: Cpu; // objeto asignado en el formulario sobre el que se realizan los cambios

  memUnits: string[] = Object.values(MemoryUnits); // unidades de memoria
  speedUnits: string[] = Object.values(SpeedUnits); // unidades de frecuencia
  cPowerUnits: string[] = Object.values(PowerUnits); // unidades de potencia

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Cambia las unidades de memoria ROM seleccionadas
   * @param u : nueva unidad de memoria seleccionada
   */
  changeProgramMemoryUnits(u: string) {
    this.model.program_memory_units = this.memUnits.filter((e) => u === e)[0];
  }

  /**
   * Cambia las unidades de memoria RAM seleccionadas
   * @param u : nueva unidad de memoria seleccionada
   */
  changeRamMemoryUnits(u: string) {
    this.model.ram_memory_units = this.memUnits.filter((e) => u === e)[0];
  }

  /**
   * Cambia las unidades de frecuencia de reloj seleccionadas
   * @param u : nueva unidad de frecuencia seleccionada
   */
  changeClockSpeedUnits(u: string) {
    this.model.clockspeed_units = this.speedUnits.filter((e) => u === e)[0];
  }

  /**
   * Cambia las unidades de potencia seleccionadas
   * @param u : nueva unidad de potencia seleccionada
   */
  changePowerUnits(u: string) {
    this.model.cpu_power_units = this.cPowerUnits.filter((e) => u === e)[0];
  }

  /**
   * Cambia las unidades de tamaño de la palabra seleccionadas
   * @param u : nueva unidad de memoria seleccionada
   */
  changeWordSizeUnits(u: string) {
    this.model.wordsize_units = this.memUnits.filter((e) => u === e)[0];
  }
}
