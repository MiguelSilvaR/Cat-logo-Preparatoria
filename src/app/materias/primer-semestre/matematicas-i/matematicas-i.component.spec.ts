import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatematicasIComponent } from './matematicas-i.component';

describe('MatematicasIComponent', () => {
  let component: MatematicasIComponent;
  let fixture: ComponentFixture<MatematicasIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatematicasIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatematicasIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
