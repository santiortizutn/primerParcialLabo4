import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/clases/usuario';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario : Usuario;

  constructor(private authService : AuthService, private router : Router) {
    this.usuario = new Usuario("admin@gmail.com", "123456", "admin");
   }

  ngOnInit(): void {
  }

  login(){
    this.authService.login(this.usuario.correo, this.usuario.clave).then(resp =>{
      this.authService.signIn(this.usuario);
      console.log(this.authService.logueado);
      this.router.navigate(['/alta']);
    }, error =>{
      console.log("ERROR: ", error);
    });



  }



  ingresoRapido(perfil : string){
    switch (perfil) {
      case 'admin':
        this.usuario.perfil = 'admin';
        this.usuario.correo = 'admin@gmail.com';
        this.usuario.clave = '123456';
        break;
      case 'empleado':
        this.usuario.perfil = 'empleado';
        this.usuario.correo = 'empleado@gmail.com';
        this.usuario.clave = '123456';
        break;
      default:
        break;
    }
  }
}
