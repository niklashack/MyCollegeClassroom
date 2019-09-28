import { TestBed } from '@angular/core/testing';

import { MessagesService } from './messages.service';

describe('MessagesService', () => {
  let service: MessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(MessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
