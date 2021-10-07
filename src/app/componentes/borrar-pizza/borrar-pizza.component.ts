import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pizza } from 'src/app/clases/pizza';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-borrar-pizza',
  templateUrl: './borrar-pizza.component.html',
  styleUrls: ['./borrar-pizza.component.css']
})
export class BorrarPizzaComponent implements OnInit {

  @Input('pizza') pizzaParaBorrar : Pizza;
  @Output() pizzaBorrada = new EventEmitter<Pizza>();

  nuevaPizza : Pizza = new Pizza("",0,0,"");

  constructor(private db : DatabaseService) { }

  ngOnInit(): void {
  }

  aceptar(){
    if (this.pizzaParaBorrar != null) {
      this.db.borrarPizzaEnBd(this.pizzaParaBorrar).subscribe(resp =>{
        this.pizzaBorrada.emit(this.nuevaPizza);
      });
    }

  }

}
