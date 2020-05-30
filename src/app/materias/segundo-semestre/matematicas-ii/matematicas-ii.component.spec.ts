import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicasIIComponent } from './matematicas-ii.component';

describe('MatematicasIIComponent', () => {
  let component: MatematicasIIComponent;
  let fixture: ComponentFixture<MatematicasIIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicasIIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicasIIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
