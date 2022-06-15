import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { CompDevices, CompTypes, Cpu, GenericComp, MemoryUnits, PowerUnits, PriceUnits, SpeedUnits } from '../classes/comp';
import { ComponentService } from '../services/component.service';
import { ComponentMock } from '../services/testing/mock-cpus';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { AddCompComponent } from './add-comp.component';
import { Period } from '../classes/period';

describe('FormAddCompComponent', () => {
  let component: AddCompComponent;
  let fixture: ComponentFixture<AddCompComponent>;
  const toastrService = {
    error: (message: "No se ha podido añadir el componente", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        ToastrModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}, {provide: ComponentService, useClass: ComponentMock}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ AddCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ComponentMock.resetComps();
    fixture = TestBed.createComponent(AddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change type', () => {
    component.changeType(CompTypes.generic);
    expect(component.model.equals(new GenericComp('', '', '', 1970, 1990, 0, 100, PriceUnits.dolar, [], [], '', '', CompTypes.generic))).toBeTruthy();
  });

  it('should not add empty component', () => {
    expect(ComponentMock.getComps().length).toEqual(5);
    component.submit();
    expect(ComponentMock.getComps().length).toEqual(5);
  });

  it('should not add existing component', () => {
    expect(ComponentMock.getComps().length).toEqual(5);
    component.model = component.model = new Cpu('Intel 4004', 'Intel', 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
      1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
      4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 1);
    component.submit();
    expect(ComponentMock.getComps().length).toEqual(5);
  });

  it('should not add new component to non existing period', () => {
    expect(ComponentMock.getComps().length).toEqual(5);
    component.model = component.model = new Cpu('Intel 4004', 'Intel', 'Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.',
      1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
      4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 1);
    component.p = new Period('nuevo', '', 'periodo no existente', '', 5);
    component.submit();
    expect(ComponentMock.getComps().length).toEqual(5);
  });

  it('should add new component', () => {
    expect(ComponentMock.getComps().length).toEqual(5);
    component.model = new Cpu('Nuevo', 'Intel', 'Descripción',
      1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
      4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 1);
    component.submit();
    expect(ComponentMock.getComps().length).toEqual(6);
    expect(component.model.equals(new Cpu('', '', '', 1970, 1990, 0, 100, PriceUnits.dolar, [], [], '', '', 0, MemoryUnits.bit, 0, MemoryUnits.bit, 0, SpeedUnits.herz, 0, PowerUnits.watios, 0, MemoryUnits.bit, 0, 0, 0)));
  });
});
