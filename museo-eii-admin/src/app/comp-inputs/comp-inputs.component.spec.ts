import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompInputsComponent } from './comp-inputs.component';

describe('CompInputsComponent', () => {
  let component: CompInputsComponent;
  let fixture: ComponentFixture<CompInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
