import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  logueado : boolean = false;

  constructor(private router : Router, private firebaseAuth: AngularFireAuth) { }

  signIn(user : any){
    localStorage.setItem('usuario', user);
    this.logueado = true;
  }

  signOut(){
    localStorage.removeItem('usuario');
    this.logueado = false;
    this.router.navigate(['/login']);
  }

  registro(correo:string, clave:string){
    return this.firebaseAuth.createUserWithEmailAndPassword(correo, clave);
  }

  login(correo:string, clave:string){
    return this.firebaseAuth.signInWithEmailAndPassword(correo, clave);
  }

  logout(){
    return this.firebaseAuth.signOut();
  }
}
