import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { FormEditPeriodComponent } from './edit-period.component';
import { Period } from '../classes/period';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FormEditPeriodComponent', () => {
  let component: FormEditPeriodComponent;
  let fixture: ComponentFixture<FormEditPeriodComponent>;
  const toastrService = {
    error: (message: "No se ha podido editar el periodo", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ FormEditPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    PeriodMock.resetPeriods();
    fixture = TestBed.createComponent(FormEditPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset form', () => {
    let comp = component.p;
    expect(comp.equals(component.model)).toBeTruthy();
    component.model.period_details = 'Nueva descripción';
    expect(comp.equals(component.model)).toBeFalsy();
    component.resetForm();
    expect(component.p.equals(component.model)).toBeTruthy();
  });

  it('should edit existing period', () => {
    let p = component.p;
    expect(p.equals(component.model)).toBeTruthy();
    component.model.period_details = 'Nueva descripción';
    expect(component.isEdited()).toBeTruthy();
    component.submit();
    expect(component.p.equals(component.model)).toBeTruthy();
    expect(component.p.period_details).toEqual('Nueva descripción');
  });

  it('should not edit non existing period', () => {
    component.model = new Period('Nuevo', 'trivia', 'periodo para editar', 'eventos', 9);
    expect(component.isEdited()).toBeTruthy();
    component.submit();
    expect(PeriodMock.getPeriods()[0].period_details).toEqual('El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.');
  });

  it('should not edit existing period with empty fields', () => {
    let p = component.p;
    expect(p.equals(component.model)).toBeTruthy();
    component.model.period_details = "";
    expect(component.isValid(component.model)).toBeFalsy();
    component.submit();
    expect(component.p.period_details).toEqual('El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.');
  });
});
