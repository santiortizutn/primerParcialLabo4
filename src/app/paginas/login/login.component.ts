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
    this.usuario = new Usuario("test@test.com", "123456", "admin");
   }

  ngOnInit(): void {
  }

  login(){
    this.authService.signIn(this.usuario);
    console.log(this.authService.logueado);
    this.router.navigate(['/alta']);


  }

  logOut(){
    this.authService.signOut();
    console.log(this.authService.logueado);
  }
}
