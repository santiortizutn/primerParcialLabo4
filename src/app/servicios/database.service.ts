import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { Pizza } from '../clases/pizza';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private listadoBD : AngularFireList<any> | any;
  private listadoPizzasBD : AngularFireList<any> | any;


  constructor(private http:HttpClient, private firebase:AngularFireDatabase) { }

  obtenerListado(){
    this.listadoBD = this.firebase.list('repartidores');
    return this.listadoBD;
  }

  registrarEnBD(repartidor : Repartidor){
    return this.http.post(`${environment.hostFirebase}/repartidores.json`, repartidor);
  }

  obtenerListadoPizzas(){
    this.listadoPizzasBD = this.firebase.list('pizzas');
    return this.listadoPizzasBD;
  }

  registrarPizzaEnBD(pizza : Pizza){
    return this.http.post(`${environment.hostFirebase}/pizzas.json`, pizza);
  }

  modificarPizzaEnBD(pizza : Pizza){
    return this.http.patch(`${environment.hostFirebase}/pizzas/${pizza.id}.json`, {precio:pizza.precio, ingredientes:pizza.ingredientes, peso:pizza.peso});
  }

  borrarPizzaEnBd(pizza : Pizza){
    return this.http.delete(`${environment.hostFirebase}/pizzas/${pizza.id}.json`);

  }
}
