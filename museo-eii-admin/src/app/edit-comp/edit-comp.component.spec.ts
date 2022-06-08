import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService, TOAST_CONFIG } from 'ngx-toastr';

import { FormEditCompComponent } from './edit-comp.component';

describe('FormEditCompComponent', () => {
  let component: FormEditCompComponent;
  let fixture: ComponentFixture<FormEditCompComponent>;
  const toastrService = {
    error: (message: "No se ha podido editar el componente", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        MatDialogModule,
        ToastrModule,
        FormsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}],
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
