import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Pais } from 'src/app/clases/pais';
import { Repartidor } from 'src/app/clases/repartidor';

@Component({
  selector: 'app-form-repartidor',
  templateUrl: './form-repartidor.component.html',
  styleUrls: ['./form-repartidor.component.css'],
})
export class FormRepartidorComponent implements OnInit {
  @Input('pais') paisSeleccionado: any;
  @Output() enviarRepartidor = new EventEmitter<any>();

  formGroup: FormGroup;
  nuevoRepartidor: Repartidor;
  nuevoPais: Pais;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      nombre: ['', [Validators.required, this.spacesValidator]],
      dni: [
        '',
        [Validators.required, this.dniValidator, this.numbersValidator],
      ],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      capacidad: [
        '',
        [Validators.required, Validators.min(1), Validators.max(99)],
      ],
      unidadPropia: ['', Validators.required],
      pais: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  spacesValidator(control: AbstractControl): null | object {
    const nombre = <string>control.value;
    const espacios = nombre.includes(' ');
    if (espacios) {
      return { contieneEspacios: true };
    } else {
      return null;
    }
  }

  dniValidator(control: AbstractControl): null | object {
    const dni = <string>control.value;
    const tamaño = dni.length;
    if (tamaño > 10) {
      return { mayorADiez: true };
    } else {
      return null;
    }
  }

  numbersValidator(control: AbstractControl): null | object {
    const valor = <string>control.value;

    if (isNaN(parseInt(valor, 10))) {
      return { contieneLetras: true };
    } else {
      return null;
    }
  }

  validarNombrePais(control: AbstractControl): null | object {
    const nombre = <string>control.value;

    if (nombre == null) {
      return { invalido: true };
    } else {
      return null;
    }
  }

  aceptar() {
    this.nuevoPais = new Pais(
      this.paisSeleccionado.translations.spa.common,
      this.paisSeleccionado.flags.png,
      this.paisSeleccionado.capital[0],
      this.paisSeleccionado.population
    );

    this.nuevoRepartidor = new Repartidor(
      this.formGroup.controls['dni'].value,
      this.formGroup.controls['nombre'].value,
      this.formGroup.controls['edad'].value,
      this.formGroup.controls['capacidad'].value,
      this.nuevoPais,
      this.formGroup.controls['unidadPropia'].value
    );
    console.log(this.nuevoRepartidor);
    this.enviarRepartidor.emit(this.nuevoRepartidor);
    this.formGroup.reset({
      nombre: '',
      dni: '',
      edad: '',
      capacidad: '',
      unidadPropia: '',
      pais: '',
    });
  }
}
