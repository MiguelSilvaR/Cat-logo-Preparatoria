import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesIIComponent } from './ingles-ii.component';

describe('InglesIIComponent', () => {
  let component: InglesIIComponent;
  let fixture: ComponentFixture<InglesIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InglesIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
