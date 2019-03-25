import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareqComponent } from './tareq.component';

describe('TareqComponent', () => {
  let component: TareqComponent;
  let fixture: ComponentFixture<TareqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
