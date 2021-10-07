import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Repartidor } from 'src/app/clases/repartidor';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-repartidor-listado',
  templateUrl: './repartidor-listado.component.html',
  styleUrls: ['./repartidor-listado.component.css']
})
export class RepartidorListadoComponent implements OnInit {


  @Output() enviarDetalle = new EventEmitter<any>();


  listadoRepartidores : Array<Repartidor> = [];

  constructor(private db : DatabaseService) { }

  ngOnInit(): void {
    this.db.obtenerListado().snapshotChanges().forEach((element: any[]) => {
      this.listadoRepartidores = [];
      element.forEach(snapshot => {
        const repartidor = snapshot.payload.toJSON() as Repartidor;
        this.listadoRepartidores.push(repartidor);
      });
      console.log(this.listadoRepartidores);
    });
   }

   mandarEvento(repartidor : Repartidor){
    this.enviarDetalle.emit(repartidor);
   }

}
