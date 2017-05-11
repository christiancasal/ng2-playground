import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeBoxComponent } from './some-box.component';

describe('SomeBoxComponent', () => {
  let component: SomeBoxComponent;
  let fixture: ComponentFixture<SomeBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
