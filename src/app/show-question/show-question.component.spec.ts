import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowQuestionComponent } from './show-question.component';

describe('ShowQuestionComponent', () => {
  let component: ShowQuestionComponent;
  let fixture: ComponentFixture<ShowQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
