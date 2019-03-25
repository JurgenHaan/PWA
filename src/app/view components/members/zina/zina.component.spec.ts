import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZinaComponent } from './zina.component';

describe('ZinaComponent', () => {
  let component: ZinaComponent;
  let fixture: ComponentFixture<ZinaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZinaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZinaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
