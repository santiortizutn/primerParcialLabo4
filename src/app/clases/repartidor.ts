export class Repartidor {

  dni : string;
  nombre : string;
  edad : number;
  capacidadTransporte : number;
  paisOrigen : object;
  unidadPropia : boolean;

  constructor(dni, nombre, edad, capacidad, pais, unidadPropia){
    this.dni = dni;
    this.nombre = nombre;
    this.edad = edad;
    this.capacidadTransporte = capacidad;
    this.paisOrigen = pais;
    this.unidadPropia = unidadPropia;
  }
}
