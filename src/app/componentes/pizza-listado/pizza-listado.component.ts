import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-pizza-listado',
  templateUrl: './pizza-listado.component.html',
  styleUrls: ['./pizza-listado.component.css']
})
export class PizzaListadoComponent implements OnInit {

  listadoPizzas : Array<Pizza> = [];

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {

    this.db.obtenerListadoPizzas().snapshotChanges().forEach((element: any[]) => {
      this.listadoPizzas = [];
      element.forEach(snapshot => {
          const pizza = snapshot.payload.toJSON() as Pizza;
          this.listadoPizzas.push(pizza);
      });
      console.log(this.listadoPizzas);
    });
  }

}
