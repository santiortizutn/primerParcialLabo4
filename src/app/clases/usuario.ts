export class Usuario {
  correo : string;
  clave : string;
  perfil : string;

  constructor(correo : string, clave : string, perfil : string){
    this.correo = correo;
    this.clave = clave;
    this.perfil = perfil;
  }
}
