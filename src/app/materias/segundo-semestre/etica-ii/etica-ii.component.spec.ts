import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaIIComponent } from './etica-ii.component';

describe('EticaIIComponent', () => {
  let component: EticaIIComponent;
  let fixture: ComponentFixture<EticaIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EticaIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
