import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { ListPeriodsComponent } from './list-periods.component';
import { Period } from '../classes/period';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('ListPeriodsComponent', () => {
  let component: ListPeriodsComponent;
  let fixture: ComponentFixture<ListPeriodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: PeriodService, useClass: PeriodMock}],
      declarations: [ ListPeriodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    PeriodMock.resetPeriods();
    fixture = TestBed.createComponent(ListPeriodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get periods', () => {
    let periods = component.periods;
    expect(periods.length).toEqual(2);
    expect(periods[0].period_name).toEqual("CPUs pre-x86");
  });

  it ('should not delete non existent period', () => {
    spyOn(component.dialog, 'open')
     .and
     .returnValue(
      {afterClosed: () => of(true)} as MatDialogRef<typeof component>
     );
    let periods = component.periods;
    expect(periods.length).toEqual(2);
    component.deletePeriod(new Period('nuevo', '', 'periodo para borrar', '', 5));
    periods = component.periods;
    expect(periods.length).toEqual(2);
  });

  it ('should delete existent period', () => {
    spyOn(component.dialog, 'open')
     .and
     .returnValue(
      {afterClosed: () => of(true)} as MatDialogRef<typeof component>
     );
    let periods = component.periods;
    expect(periods.length).toEqual(2);
    component.deletePeriod(periods[0]);
    periods = component.periods;
    expect(periods.length).toEqual(1);
    expect(periods[0].period_name).toEqual('8086 y 8088');
  });
});
