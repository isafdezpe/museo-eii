import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';
import { createTranslateLoader } from '../app.module';
import { ComponentService } from '../cpus.service';
import { ComponentMock } from '../mock-cpus';
import { PeriodMock } from '../mock-periods';
import { PeriodService } from '../period.service';

import { PeriodComponent } from './period.component';

describe('PeriodComponent', () => {
  let component: PeriodComponent;
  let fixture: ComponentFixture<PeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
      ],
      providers: [{provide: ComponentService, useClass: ComponentMock}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ PeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the actual period', () => {
    component.getPeriod(1);
    let actual = component.period;
    expect(actual.period_name).toEqual('CPUs pre-x86');
  });

  it('should get next and previous period', () => {
    component.getPeriod(1);
    expect(component.previousPeriod).toBeUndefined();
    expect(component.nextPeriod.period_name).toEqual('8086 y 8088');
  });
});