import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Cpu, PriceUnits, CompDevices, MemoryUnits, SpeedUnits, PowerUnits } from '../classes/comp';

import { CpuTypeFormComponent } from './cpu-type-form.component';

describe('CpuTypeFormComponent', () => {
  let component: CpuTypeFormComponent;
  let fixture: ComponentFixture<CpuTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ CpuTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuTypeFormComponent);
    component = fixture.componentInstance;
    let expectedComp = new Cpu('Intel 4004', 'Intel', 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
      1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
      4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 1);
    component.model = expectedComp;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change units', () => {
    let model = component.model;
    expect(model.clockspeed_units).toEqual(SpeedUnits.kiloherz);
    component.changeClockSpeedUnits(SpeedUnits.herz);
    expect(model.clockspeed_units).toEqual(SpeedUnits.herz);
    expect(model.cpu_power_units).toEqual(PowerUnits.watios);
    component.changePowerUnits(PowerUnits.kilowatios);
    expect(model.cpu_power_units).toEqual(PowerUnits.kilowatios);
    expect(model.ram_memory_units).toEqual(MemoryUnits.byte);
    component.changeRamMemoryUnits(MemoryUnits.kilobyte);
    expect(model.ram_memory_units).toEqual(MemoryUnits.kilobyte);
    expect(model.wordsize_units).toEqual(MemoryUnits.bit);
    component.changeWordSizeUnits(MemoryUnits.kilobyte);
    expect(model.wordsize_units).toEqual(MemoryUnits.kilobyte);
    expect(model.program_memory_units).toEqual(MemoryUnits.kilobyte);
    component.changeProgramMemoryUnits(MemoryUnits.megabyte);
    expect(model.program_memory_units).toEqual(MemoryUnits.megabyte);
  });
});
