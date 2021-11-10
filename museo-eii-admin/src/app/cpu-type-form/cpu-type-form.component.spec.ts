import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuTypeFormComponent } from './cpu-type-form.component';

describe('CpuTypeFormComponent', () => {
  let component: CpuTypeFormComponent;
  let fixture: ComponentFixture<CpuTypeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuTypeFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuTypeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
