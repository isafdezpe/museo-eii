import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpuDetailsComponent } from './cpu-details.component';

describe('CpuDetailsComponent', () => {
  let component: CpuDetailsComponent;
  let fixture: ComponentFixture<CpuDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpuDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CpuDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
