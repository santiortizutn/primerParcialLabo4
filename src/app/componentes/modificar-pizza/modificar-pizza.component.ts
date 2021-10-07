import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pizza } from 'src/app/clases/pizza';
import { DatabaseService } from 'src/app/servicios/database.service';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent implements OnInit {

  @Input('pizza') nuevaPizza : Pizza;
  @Output() enviarPizza = new EventEmitter<Pizza>();


  constructor(private db: DatabaseService) {
  }

  ngOnInit(): void {}

  aceptar() {
    if (this.nuevaPizza != null) {
      this.db.modificarPizzaEnBD(this.nuevaPizza).subscribe((resp : any) =>{
        this.enviarPizza.emit(this.nuevaPizza);
      });
    }
  }

}
