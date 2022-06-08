import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrService } from 'ngx-toastr';

import { FormEditPeriodComponent } from './edit-period.component';

describe('FormEditPeriodComponent', () => {
  let component: FormEditPeriodComponent;
  let fixture: ComponentFixture<FormEditPeriodComponent>;
  const toastrService = {
    error: (message: "No se ha podido editar el periodo", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        FormsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}],
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
