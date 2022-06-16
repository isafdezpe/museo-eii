import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { IvyGalleryModule } from 'angular-gallery';
import { createTranslateLoader } from '../app.module';
import { ComponentService } from '../services/cpus.service';
import { ComponentMock } from '../services/testing/mock-cpus';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { CompDetailsComponent } from './comp-details.component';

describe('CompDetailsComponent', () => {
  let component: CompDetailsComponent;
  let fixture: ComponentFixture<CompDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        IvyGalleryModule,
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
      declarations: [ CompDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get cpu', () => {
    let comp = component.comp;
    expect(comp.component_name).toEqual('Intel 4004');
  });

  it('should get the actual period', () => {
    let actual = component.period;
    expect(actual.period_name).toEqual('CPUs pre-x86');
  });

  it('should get next and previous period', () => {
    expect(component.previousPeriod).toBeUndefined();
    expect(component.nextPeriod.period_name).toEqual('8086 y 8088');
  });

  it('should get other components from period', () => {
    let comps = component.compsFromPeriod;
    expect(comps.length).toEqual(3);
    expect(comps[1].component_name).toEqual('Intel 8008');
  });

  it ('should check devices', () => {
    expect(component.isDesktop()).toBeTruthy();
    expect(component.isPortable()).toBeTruthy();
  });

  it('should get images', () => {
    let comp = component.comp;
    expect(comp.component_imgs.length).toEqual(2);
    expect(comp.component_imgs[0]).toEqual('imagen1.jpeg');
  });
});
