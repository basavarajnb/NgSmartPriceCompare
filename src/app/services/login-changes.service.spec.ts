import { TestBed, inject } from '@angular/core/testing';

import { LoginChangesService } from './login-changes.service';

describe('LoginChangesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginChangesService]
    });
  });

  it('should ...', inject([LoginChangesService], (service: LoginChangesService) => {
    expect(service).toBeTruthy();
  }));
});
