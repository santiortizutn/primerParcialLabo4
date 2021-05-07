import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRepartidorComponent } from './form-repartidor.component';

describe('FormRepartidorComponent', () => {
  let component: FormRepartidorComponent;
  let fixture: ComponentFixture<FormRepartidorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRepartidorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRepartidorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
