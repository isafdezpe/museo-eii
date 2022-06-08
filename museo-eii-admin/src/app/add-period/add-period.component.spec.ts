import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AddPeriodComponent } from './add-period.component';

describe('FormAddPeriodComponent', () => {
  let component: AddPeriodComponent;
  let fixture: ComponentFixture<AddPeriodComponent>;
  const toastrService = {
    error: (message: "No se ha podido añadir el periodo", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        MatSnackBarModule,
        RouterTestingModule,
        ToastrModule,
        FormsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}],
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
