import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/servicios/auth.service';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {


  constructor(public authService : AuthService, private router : Router) {

  }

  ngOnInit(): void {
  }

  logOut(){
    this.authService.logout().then(resp => {
      this.authService.signOut();
      console.log(this.authService.logueado);
    }, error =>{
      console.log("ERROR: ", error);
    });
  }

}
