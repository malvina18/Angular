import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VetSpecialtiesComponent } from './vet-specialties.component';

describe('VetSpecialtiesComponent', () => {
  let component: VetSpecialtiesComponent;
  let fixture: ComponentFixture<VetSpecialtiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VetSpecialtiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VetSpecialtiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
