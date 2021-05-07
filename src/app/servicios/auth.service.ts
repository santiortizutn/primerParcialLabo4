import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logueado : boolean = false;

  constructor(private router : Router) { }

  signIn(user : any){
    localStorage.setItem('usuario', user);
    this.logueado = true;
  }

  signOut(){
    localStorage.removeItem('usuario');
    this.logueado = false;
    this.router.navigate(['/login']);
  }
}
