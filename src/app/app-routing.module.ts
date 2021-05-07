import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogueadoGuard } from './guards/logueado.guard';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { BienvenidoComponent } from './paginas/bienvenido/bienvenido.component';
import { LoginComponent } from './paginas/login/login.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alta', component: AltaRepartidorComponent, canActivate: [LogueadoGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
