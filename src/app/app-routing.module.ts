import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LogueadoGuard } from './guards/logueado.guard';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { BienvenidoComponent } from './paginas/bienvenido/bienvenido.component';
import { LoginComponent } from './paginas/login/login.component';
import { RepartidorDetalleComponent } from './paginas/repartidor-detalle/repartidor-detalle.component';
import { SalenPizzasComponent } from './paginas/salen-pizzas/salen-pizzas.component';

const routes: Routes = [
  {path: '', component: BienvenidoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alta', component: AltaRepartidorComponent, canActivate: [LogueadoGuard]},
  {path: 'detalle', component: RepartidorDetalleComponent, canActivate: [LogueadoGuard]},
  {path: 'pizzas', component: SalenPizzasComponent, canActivate: [AdminGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
