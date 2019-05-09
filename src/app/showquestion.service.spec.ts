import { TestBed } from '@angular/core/testing';

import { ShowquestionService } from './showquestion.service';

describe('ShowquestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowquestionService = TestBed.get(ShowquestionService);
    expect(service).toBeTruthy();
  });
});
