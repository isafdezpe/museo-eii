import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { PeriodMock } from '../services/testing/mock-periods';
import { Period } from '../classes/period';
import { PeriodService } from '../services/period.service';

import { AddPeriodComponent } from './add-period.component';

describe('FormAddPeriodComponent', () => {
  let component: AddPeriodComponent;
  let fixture: ComponentFixture<AddPeriodComponent>;
  const toastrService = {
    error: (message: "No se ha podido añadir el periodo", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule,
        ToastrModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ AddPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    PeriodMock.resetPeriods();
    fixture = TestBed.createComponent(AddPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not add empty period', () => {
    expect(PeriodMock.getPeriods().length).toEqual(2);
    component.submit();
    expect(PeriodMock.getPeriods().length).toEqual(2);
  });

  it('should not add existing period', () => {
    expect(PeriodMock.getPeriods().length).toEqual(2);
    component.model = new Period('CPUs pre-x86','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
      'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
      '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1);
    component.submit();
    expect(PeriodMock.getPeriods().length).toEqual(2);
  });

  it('should add new period', () => {
    expect(PeriodMock.getPeriods().length).toEqual(2);
    component.model = new Period('Periodo 1990','Intel fabricó más chips.',
      'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
      '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 3);
    component.submit();
    expect(PeriodMock.getPeriods().length).toEqual(3);
  });
});
