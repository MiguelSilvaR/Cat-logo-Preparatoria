import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuimicaIComponent } from './quimica-i.component';

describe('QuimicaIComponent', () => {
  let component: QuimicaIComponent;
  let fixture: ComponentFixture<QuimicaIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuimicaIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuimicaIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
