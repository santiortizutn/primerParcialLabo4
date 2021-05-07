import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input('paises') listadoPaises : Array<any>;
  @Output() enviarPais = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionarPais(pais : any){
    this.enviarPais.emit(pais);
    console.log(pais);
  }

}
