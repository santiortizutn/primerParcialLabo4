import { Component, OnInit } from '@angular/core';
import { GitService } from 'src/app/servicios/git.service';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  datos : any;

  constructor(private gitService : GitService) { }

  ngOnInit() {
    this.gitService.traerTodo().then((data)=>{
      this.datos = data;
      console.info(this.datos);
    });

  }



}
