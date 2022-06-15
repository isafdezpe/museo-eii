import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IvyGalleryModule } from 'angular-gallery';
import { ComponentService } from '../services/component.service';
import { ComponentMock } from '../services/testing/mock-cpus';
import { PeriodMock } from '../services/testing/mock-periods';
import { PeriodService } from '../services/period.service';

import { MyComponentComponent } from './my-component.component';

describe('MyComponentComponent', () => {
  let component: MyComponentComponent;
  let fixture: ComponentFixture<MyComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        IvyGalleryModule
      ],
      providers: [{provide: ComponentService, useClass: ComponentMock}, {provide: PeriodService, useClass: PeriodMock}],
      declarations: [ MyComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    ComponentMock.resetComps();
    fixture = TestBed.createComponent(MyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show component data', () => {
    let comp = component.c;
    expect(comp.component_name).toEqual('Intel 4004');
  });
});
