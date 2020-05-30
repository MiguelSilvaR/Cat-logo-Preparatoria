import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InglesIComponent } from './ingles-i.component';

describe('InglesIComponent', () => {
  let component: InglesIComponent;
  let fixture: ComponentFixture<InglesIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InglesIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InglesIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
