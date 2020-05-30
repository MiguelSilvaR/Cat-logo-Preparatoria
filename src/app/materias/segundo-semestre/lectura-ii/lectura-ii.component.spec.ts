import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaIIComponent } from './lectura-ii.component';

describe('LecturaIIComponent', () => {
  let component: LecturaIIComponent;
  let fixture: ComponentFixture<LecturaIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
