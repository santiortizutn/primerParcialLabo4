import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-repartidor',
  templateUrl: './form-repartidor.component.html',
  styleUrls: ['./form-repartidor.component.css']
})
export class FormRepartidorComponent implements OnInit {

  @Input('pais') paisSeleccionado : any;

  formGroup : FormGroup;

  constructor( private fb : FormBuilder) {
    this.formGroup = this.fb.group({
      "nombre": ['', [Validators.required, this.spacesValidator]],
      "dni": ['', [Validators.required, this.dniValidator, this.numbersValidator]],
      "edad": ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      "capacidad": ['', [Validators.required, Validators.min(1), Validators.max(99)]],
      "unidadPropia": ['', Validators.required],
      "pais": [this.paisSeleccionado, Validators.required]

    });
  }

  ngOnInit(): void {
  }


  spacesValidator(control : AbstractControl) : null | object {
    const nombre = <string>control.value;
    const espacios  = nombre.includes(' ');
    if (espacios) {
      return { contieneEspacios:true };
    }else{
      return null;
    }
  }

  dniValidator(control : AbstractControl): null | object {
    const dni = <string>control.value;
    const tamaño  = dni.length;
    if (tamaño > 10) {
      return { mayorADiez:true };
    }else{
      return null;
    }
  }

  numbersValidator(control : AbstractControl) : null | object {
    const valor = <string>control.value;

    if (isNaN(parseInt(valor, 10))) {
      return { contieneLetras:true };
    }else{
      return null;
    }
  }


  aceptar(){
    alert("Por consola se muestra el formulario");
    console.info(this.formGroup.getRawValue());
  }

}
