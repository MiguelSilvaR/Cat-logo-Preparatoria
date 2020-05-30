import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticaIComponent } from './informatica-i.component';

describe('InformaticaIComponent', () => {
  let component: InformaticaIComponent;
  let fixture: ComponentFixture<InformaticaIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaticaIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaticaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
