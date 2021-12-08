import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuTypeDetailsComponent } from './cpu-type-details.component';

describe('CpuTypeDetailsComponent', () => {
  let component: CpuTypeDetailsComponent;
  let fixture: ComponentFixture<CpuTypeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuTypeDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuTypeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
