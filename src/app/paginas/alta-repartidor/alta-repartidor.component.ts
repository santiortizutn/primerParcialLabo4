import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent implements OnInit {

  paises = [];
  paisSeleccionado : any;
  formGroup : FormGroup;

  constructor(private paisesService : PaisesService) {
  }

  ngOnInit(): void {
    this.paisesService.traerTodos().subscribe(paises => {
      for (let i = 0; i < 10; i++) {
        this.paises.push(paises[i]);
      }
    });
  }




}
