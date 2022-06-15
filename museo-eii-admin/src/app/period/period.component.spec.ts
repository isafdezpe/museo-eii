import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentService } from '../services/component.service';
import { ComponentMock } from '../services/testing/mock-cpus';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { PeriodComponent } from './period.component';
import { CompDevices, Cpu, MemoryUnits, PowerUnits, PriceUnits, SpeedUnits } from '../classes/comp';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PeriodComponent', () => {
  let component: PeriodComponent;
  let fixture: ComponentFixture<PeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: ComponentService, useClass: ComponentMock}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ PeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ComponentMock.resetComps();
    fixture = TestBed.createComponent(PeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show period data', () => {
    let period = component.p;
    expect(period.period_name).toEqual('CPUs pre-x86');
  });

  it('should get components from period', () => {
    let comps = component.comps;
    expect(comps.length).toEqual(3);
    expect(comps[0].component_name).toEqual('Intel 4004');
  });

  it('should not delete non existing component', () => {
    spyOn(component.dialog, 'open')
     .and
     .returnValue(
      {afterClosed: () => of(true)} as MatDialogRef<typeof component>
     );
    let comps = component.comps;
    expect(comps.length).toEqual(3);
    component.deleteComponent(new Cpu('Nuevo', 'Intel', 'Descripción', 1971, 1981, 1, 1800, PriceUnits.dolar, [CompDevices.desktop, CompDevices.portable], ['4004-1.jpeg', '4004-2.jpeg', '4004-3.jpeg'], "Busicom 141PF", "Busicom 141PF.jpeg", 
    4, MemoryUnits.kilobyte, 640, MemoryUnits.byte, 740, SpeedUnits.kiloherz, 0.45, PowerUnits.watios, 4, MemoryUnits.bit, 10000, 0.03, 2300, 9))
    comps = component.comps;
    expect(comps.length).toEqual(3);
  });

  it('should delete existing component', () => {
    spyOn(component.dialog, 'open')
     .and
     .returnValue(
      {afterClosed: () => of(true)} as MatDialogRef<typeof component>
     );
    let comps = component.comps;
    expect(comps.length).toEqual(3);
    component.deleteComponent(comps[0]);
    comps = component.comps;
    expect(comps.length).toEqual(2);
    expect(comps[0].component_name).toEqual('Intel 8008');
  });
});
