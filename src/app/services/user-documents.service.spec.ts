import { TestBed } from '@angular/core/testing';

import { UserDocumentsService } from './user-documents.service';

describe('UserDocumentsService', () => {
  let service: UserDocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
