import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JurgenComponent } from './jurgen.component';

describe('JurgenComponent', () => {
  let component: JurgenComponent;
  let fixture: ComponentFixture<JurgenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JurgenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JurgenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
