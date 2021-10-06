import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Repartidor } from 'src/app/clases/repartidor';
import { PaisesService } from 'src/app/servicios/paises.service';
import { DatabaseService } from 'src/app/servicios/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css'],
})
export class AltaRepartidorComponent implements OnInit {
  paises = [];
  paisSeleccionado: any;
  formGroup: FormGroup;

  constructor(
    private paisesService: PaisesService,
    private db: DatabaseService
  ) {}

  ngOnInit(): void {
    this.traerEuropa();
  }

  asignarPais(object: any) {
    this.paisSeleccionado = object;
  }

  devolverPais() {
    return this.paisSeleccionado;
  }

  traerEuropa() {
    this.paisesService.traerEuropa().subscribe((paises) => {
      this.paises = JSON.parse(JSON.stringify(paises));
      console.log(this.paises);
    });
  }

  traerAfrica() {
    this.paisesService.traerAfrica().subscribe((paises) => {
      this.paises = JSON.parse(JSON.stringify(paises));
      console.log(this.paises);
    });
  }

  guardarRepartidor(repartidor: Repartidor) {
    this.db.registrarEnBD(repartidor).subscribe(
      (resp) => {
        Swal.fire({
          icon: 'success',
          title: 'Repartidor guardado',
          showConfirmButton: true,
        }).then((ok) => {
          this.traerEuropa();
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
