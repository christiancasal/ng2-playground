import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterResultComponent } from './letter-result.component';

describe('LetterResultComponent', () => {
  let component: LetterResultComponent;
  let fixture: ComponentFixture<LetterResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LetterResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
