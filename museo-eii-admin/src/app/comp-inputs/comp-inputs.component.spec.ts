import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Cpu, PriceUnits, CompDevices, MemoryUnits, SpeedUnits, PowerUnits } from '../classes/comp';

import { CompInputsComponent } from './comp-inputs.component';

describe('CompInputsComponent', () => {
  let component: CompInputsComponent;
  let fixture: ComponentFixture<CompInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [ CompInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInputsComponent);
    component = fixture.componentInstance;
    let expectedComp = new Cpu('Intel 4004', 'Intel', 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
      1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
      4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 1);
    component.model = expectedComp;
    component.images = ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'];
    component.imagesNames = ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check devices', () => {
    expect(component.isDesktop()).toBeTruthy();
    expect(component.isPortable()).toBeTruthy();
  });

  it('should change units', () => {
    expect(component.model.component_price_units).toEqual(PriceUnits.dolar);
    component.changePriceUnits(PriceUnits.euro);
    expect(component.model.component_price_units).toEqual(PriceUnits.euro);
  });

  it('should change devices', () => {
    component.onChange(true, false);
    expect(component.isDesktop()).toBeFalsy();
    expect(component.isPortable()).toBeTruthy();
    component.onChange(false, true);
    expect(component.isDesktop()).toBeTruthy();
    expect(component.isPortable()).toBeFalsy();
    component.onChange(true, true);
    expect(component.isDesktop()).toBeTruthy();
    expect(component.isPortable()).toBeTruthy();
    component.onChange(false, false);
    expect(component.isDesktop()).toBeFalsy();
    expect(component.isPortable()).toBeFalsy();
  });

  it('should remove images', () => {
    expect(component.images.length).toEqual(3);
    component.removeImage('4004-1.jpeg');
    expect(component.images.length).toEqual(2);
  });

});
