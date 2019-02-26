import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVetSpecialtiesComponent } from './form-vet-specialties.component';

describe('FormVetSpecialtiesComponent', () => {
  let component: FormVetSpecialtiesComponent;
  let fixture: ComponentFixture<FormVetSpecialtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVetSpecialtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVetSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
