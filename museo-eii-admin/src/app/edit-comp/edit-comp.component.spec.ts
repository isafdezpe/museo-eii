import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ComponentService } from '../services/component.service';
import { ComponentMock } from '../services/testing/mock-cpus';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { FormEditCompComponent } from './edit-comp.component';
import { CompDevices, Cpu, MemoryUnits, PowerUnits, PriceUnits, SpeedUnits } from '../classes/comp';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormEditCompComponent', () => {
  let component: FormEditCompComponent;
  let fixture: ComponentFixture<FormEditCompComponent>;
  const toastrService = {
    error: (message: "No se ha podido editar el componente", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        ToastrModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}, {provide: ComponentService, useClass: ComponentMock}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ FormEditCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ComponentMock.resetComps();
    fixture = TestBed.createComponent(FormEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form', () => {
    let comp = component.c;
    expect(comp.equals(component.model)).toBeTruthy();
    component.model.component_description = 'Nueva descripción';
    expect(comp.equals(component.model)).toBeFalsy();
    component.resetForm();
    expect(component.c.equals(component.model)).toBeTruthy();
  });

  it('should edit existing component', () => {
    let comp = component.c;
    expect(comp.equals(component.model)).toBeTruthy();
    expect(comp.equals(ComponentMock.getComps()[0])).toBeTruthy();
    component.model.component_description = 'Nueva descripción';
    expect(component.isEdited()).toBeTruthy();
    component.submit();
    expect(component.c.equals(component.model)).toBeTruthy();
    expect(component.c.component_description).toEqual('Nueva descripción');
  });

  it('should not edit non existing component', () => {
    component.model = new Cpu('Nuevo', 'Intel', 'Descripción',1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
    4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 8);
    expect(component.isEdited()).toBeTruthy();
    component.submit();
    expect(ComponentMock.getComps()[0].component_description).toEqual('Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.');
  });

  it('should not edit existing component with empty fields', () => {
    let comp = component.c;
    expect(comp.equals(component.model)).toBeTruthy();
    component.model.component_description = "";
    expect(component.isValid(component.model)).toEqual(-1);
    component.submit();
    expect(component.c.component_description).toEqual('Desarrollado para calculadoras de la marca Busicom, se instaló en máquinas de Pinball y fue candidato a instalarse en la nave espacial Pioneer 10. Existe una réplica funcional de 41x58cm en el Intel Museum de California.');
  });

  it('should remove images', () => {
    expect(component.compImgsInDB.length).toEqual(3);
    component.removeImage("Busicom 141PF.jpeg");
    expect(component.model.famous_system_img).toEqual("");
    expect(component.model.component_imgs.length).toEqual(2);
    component.removeImage('imagen1.jpeg');
    expect(component.model.component_imgs.length).toEqual(1);
    expect(component.compImgsInDB.length).toEqual(1);
  });
});
