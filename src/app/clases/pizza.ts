export class Pizza {
  nombre : string;
  peso : number;
  precio : number;
  ingredientes : string;
  id : any;

  constructor(nombre: string, peso: number, precio: number, ingredientes: string){
    this.nombre = nombre;
    this.peso = peso;
    this.precio = precio;
    this.ingredientes = ingredientes;
  }
}
