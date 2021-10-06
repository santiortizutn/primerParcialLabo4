import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { Repartidor } from '../clases/repartidor';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private listadoBD : AngularFireList<any> | any;

  constructor(private http:HttpClient, private firebase:AngularFireDatabase) { }

  obtenerListado(){
    this.listadoBD = this.firebase.list('repartidores');
    return this.listadoBD;
  }

  registrarEnBD(repartidor : Repartidor){
    return this.http.post(`${environment.hostFirebase}/repartidores.json`, repartidor);
  }
}
