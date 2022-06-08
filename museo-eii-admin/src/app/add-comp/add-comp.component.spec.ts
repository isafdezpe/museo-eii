import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ToastrModule, ToastrService } from 'ngx-toastr';

import { AddCompComponent } from './add-comp.component';

describe('FormAddCompComponent', () => {
  let component: AddCompComponent;
  let fixture: ComponentFixture<AddCompComponent>;
  const toastrService = {
    error: (message: "No se ha podido añadir el componente", title: "Error", positionClass: "toast-bottom-full-width" ) => {}
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        ToastrModule,
        FormsModule
      ],
      providers: [{provide: ToastrService, useValue: toastrService}],
      declarations: [ AddCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
