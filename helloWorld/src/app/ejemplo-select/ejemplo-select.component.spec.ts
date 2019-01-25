import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemploSelectComponent } from './ejemplo-select.component';

describe('EjemploSelectComponent', () => {
  let component: EjemploSelectComponent;
  let fixture: ComponentFixture<EjemploSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemploSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemploSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
