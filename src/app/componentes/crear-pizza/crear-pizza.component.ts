import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-crear-pizza',
  templateUrl: './crear-pizza.component.html',
  styleUrls: ['./crear-pizza.component.css'],
})
export class CrearPizzaComponent implements OnInit {
  @Output() enviarPizza = new EventEmitter<Pizza>();

  nuevaPizza: Pizza;
  formGroup: FormGroup;

  constructor(private fb: FormBuilder, private db: DatabaseService) {
    this.formGroup = this.fb.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      peso: [
        '',
        [Validators.required, Validators.min(500), Validators.max(1000)],
      ],
      ingredientes: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  aceptar() {
    this.nuevaPizza = new Pizza(
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['peso'].value,
      this.formGroup.controls['precio'].value,
      this.formGroup.controls['ingredientes'].value
    );
    this.db.registrarPizzaEnBD(this.nuevaPizza).subscribe((resp : any) =>{
      this.nuevaPizza.id = resp.name;
      this.enviarPizza.emit(this.nuevaPizza);
      this.formGroup.reset({
        nombre: '',
        peso: '',
        precio: '',
        ingredientes: ''
      });
    });
  }
}
