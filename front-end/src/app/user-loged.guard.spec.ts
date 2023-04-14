import { TestBed } from '@angular/core/testing';

import { UserLogedGuard } from './user-loged.guard';

describe('UserLogedGuard', () => {
  let guard: UserLogedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserLogedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
