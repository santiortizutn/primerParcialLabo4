import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaListadoComponent } from './pizza-listado.component';

describe('PizzaListadoComponent', () => {
  let component: PizzaListadoComponent;
  let fixture: ComponentFixture<PizzaListadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaListadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
