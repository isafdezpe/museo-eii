import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditCompComponent } from './form-edit-comp.component';

describe('FormEditCompComponent', () => {
  let component: FormEditCompComponent;
  let fixture: ComponentFixture<FormEditCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
