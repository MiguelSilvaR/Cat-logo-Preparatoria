import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformaticaIIComponent } from './informatica-ii.component';

describe('InformaticaIIComponent', () => {
  let component: InformaticaIIComponent;
  let fixture: ComponentFixture<InformaticaIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformaticaIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformaticaIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
