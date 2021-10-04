import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaisesService } from 'src/app/servicios/paises.service';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input('paises') listadoPaises : Array<any>;
  @Output() enviarPais = new EventEmitter<any>();

  paises = [];

  constructor(private paisesService : PaisesService) {
  }

  ngOnInit(): void {
  }

  seleccionarPais(pais : any){
    this.enviarPais.emit(pais);
    console.log(pais);
  }

}
