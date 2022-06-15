import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthGuard } from './auth-guard.guard';
import { UserMock } from './services/testing/mock-user';
import { UserService } from './services/user.service';

describe('AuthGuardGuard', () => {
  let guard: AuthGuard;

  let routeMock: any = { snapshot: {}};
  let routeStateMock: any = { snapshot: {}, url: '/cookies'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [{provide: UserService, useClass: UserMock}]
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should check if user is logged', () => {
    UserMock.resetUser();
    expect(guard.canActivate(routeMock, routeStateMock)).toBeFalsy();
  });
});
