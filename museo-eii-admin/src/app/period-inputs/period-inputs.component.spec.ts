import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeriodInputsComponent } from './period-inputs.component';

describe('PeriodInputsComponent', () => {
  let component: PeriodInputsComponent;
  let fixture: ComponentFixture<PeriodInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeriodInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeriodInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
