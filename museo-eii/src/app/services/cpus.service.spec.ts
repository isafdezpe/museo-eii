import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ComponentService } from './cpus.service';

describe('CpusService', () => {
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
