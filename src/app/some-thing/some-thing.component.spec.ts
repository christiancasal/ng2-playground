import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeThingComponent } from './some-thing.component';

describe('SomeThingComponent', () => {
  let component: SomeThingComponent;
  let fixture: ComponentFixture<SomeThingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SomeThingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeThingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
