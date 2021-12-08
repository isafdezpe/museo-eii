import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditPeriodComponent } from './edit-period.component';

describe('FormEditPeriodComponent', () => {
  let component: FormEditPeriodComponent;
  let fixture: ComponentFixture<FormEditPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
