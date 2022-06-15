import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterTestingModule } from '@angular/router/testing';
import { Period } from '../classes/period';
import { PeriodMock } from '../services/testing/mock-periods';
import { UserMock } from '../services/testing/mock-user';
import { UserService } from '../services/user.service';

import { MenuComponent } from './menu.component';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers: [{provide: UserService, useClass: UserMock}],
      declarations: [ MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if form is edited', () => {
    component.initialObject = PeriodMock.getPeriods()[0];
    component.model = new Period('CPUs pre-x86','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
      'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
      '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1);
    expect(component.isEdited()).toBeFalsy();
    component.model = new Period('Nuevo','Intel originalmente fabricaba solo chips de memoria y se inició en la fabricación de CPUs con estos modelos.\nEstos chips no tienen memoria caché ni tiene sentido hablar de velocidad de bus.',
      'El 4004 formaba parte de la familia de chips MCS, que complementaban sus funciones.\nSus sucesores 4040, 8080 y 8085 tenían su propia familia de chips de soporte.',
      '1970: Apollo 13\n1971: email\n1971: Floppy, pantallas LCD', 1)
    expect(component.isEdited()).toBeTruthy();
    component.initialObject = undefined;
    component.model = undefined;
    expect(component.isEdited()).toBeFalsy();
  });

  it('should logout', () => {
    component.exitSession();
    expect(UserMock.getToken()).toEqual("");
  });
});
