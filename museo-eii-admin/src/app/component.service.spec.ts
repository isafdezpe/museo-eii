import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ComponentService } from './component.service';

describe('ComponentService', () => {
  let service: ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
