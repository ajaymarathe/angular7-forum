import { TestBed } from '@angular/core/testing';

import { UpdateQuestionService } from './update-question.service';

describe('UpdateQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateQuestionService = TestBed.get(UpdateQuestionService);
    expect(service).toBeTruthy();
  });
});
