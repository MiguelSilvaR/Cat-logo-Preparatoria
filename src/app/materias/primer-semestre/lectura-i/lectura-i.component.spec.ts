import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaIComponent } from './lectura-i.component';

describe('LecturaIComponent', () => {
  let component: LecturaIComponent;
  let fixture: ComponentFixture<LecturaIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LecturaIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
