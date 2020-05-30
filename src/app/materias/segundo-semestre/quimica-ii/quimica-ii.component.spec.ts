import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaIIComponent } from './quimica-ii.component';

describe('QuimicaIIComponent', () => {
  let component: QuimicaIIComponent;
  let fixture: ComponentFixture<QuimicaIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
