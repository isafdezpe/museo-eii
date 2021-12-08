import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPeriodComponent } from './add-period.component';

describe('FormAddComponent', () => {
  let component: AddPeriodComponent;
  let fixture: ComponentFixture<AddPeriodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPeriodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
