import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EticaIComponent } from './etica-i.component';

describe('EticaIComponent', () => {
  let component: EticaIComponent;
  let fixture: ComponentFixture<EticaIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EticaIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EticaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
