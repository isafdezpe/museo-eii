import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { ComponentService } from '../cpus.service';
import { ComponentMock } from '../mock-cpus';
import { PeriodMock } from '../mock-periods';
import { PeriodService } from '../period.service';

import { MuseumTimelineComponent } from './museum-timeline.component';

describe('MuseumTimelineComponent', () => {
  let component: MuseumTimelineComponent;
  let fixture: ComponentFixture<MuseumTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: createTranslateLoader,
            deps: [HttpClient]
          }
        }),
        NgxSliderModule
      ],
      providers: [{provide: ComponentService, useClass: ComponentMock}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ MuseumTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MuseumTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get periods', () => {
    let periods = component.periods;
    expect(periods.length).toEqual(2);
    expect(periods[0].period_name).toEqual('CPUs pre-x86');
  });

  it ('should get components from periods', () => {
    let comps = component.comps;
    //expect(comps.keys.length).toEqual(2);
    let comps1 = comps.get(1);
    expect(comps1.length).toEqual(3);
    expect(comps1[0].component_name).toEqual('Intel 4004');
  })

  it('should search by years and name', () => {
    expect(component.periodsFiltered.length).toEqual(2);
    component.search(1973, 1980, 'pre-x86');
    expect(component.periodsFiltered.length).toEqual(1);
  });
});
