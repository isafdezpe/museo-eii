import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UserMock } from '../services/testing/mock-user';
import { UserService } from '../services/user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        MatSnackBarModule,
        FormsModule,
        BrowserAnimationsModule
      ],
      providers: [{provide: UserService, useClass: UserMock}],
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    UserMock.resetUser();
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not login with password 123456', () => {
    expect(UserMock.getToken()).toEqual("");
    component.model.email = "uo257829@uniovi.es";
    component.model.password = "123456";
    component.login();
    expect(UserMock.getToken()).toBeUndefined();
  });

  it('should login with correct user and password', () => {
    expect(UserMock.getToken()).toEqual("");
    component.model.email = "uo257829@uniovi.es";
    component.model.password = "museoinfo2022";
    component.login();
    expect(UserMock.getToken()).toEqual("uo257829@uniovi.es");
  });
});
