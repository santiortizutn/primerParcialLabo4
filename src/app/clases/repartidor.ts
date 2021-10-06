import { Pais } from "./pais";

export class Repartidor {

  dni : string;
  nombre : string;
  edad : number;
  capacidadTransporte : number;
  paisOrigen : Pais;
  unidadPropia : boolean;

  constructor(dni: string, nombre: string, edad: number, capacidad: number, pais: Pais, unidadPropia: boolean){
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.capacidadTransporte = capacidad;
    this.paisOrigen = pais;
    this.unidadPropia = unidadPropia;
  }
}
