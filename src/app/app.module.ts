import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceraComponent } from './componentes/cabecera/cabecera.component';
import { BienvenidoComponent } from './paginas/bienvenido/bienvenido.component';
import { LoginComponent } from './paginas/login/login.component';
import { AltaRepartidorComponent } from './paginas/alta-repartidor/alta-repartidor.component';
import { TablaPaisesComponent } from './componentes/tabla-paises/tabla-paises.component';
import { FormRepartidorComponent } from './componentes/form-repartidor/form-repartidor.component';
import { environment } from 'src/environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';
import { RepartidorDetalleComponent } from './paginas/repartidor-detalle/repartidor-detalle.component';
import { RepartidorListadoComponent } from './componentes/repartidor-listado/repartidor-listado.component';
import { DetalleRepartidorComponent } from './componentes/detalle-repartidor/detalle-repartidor.component';
import { DetallePaisComponent } from './componentes/detalle-pais/detalle-pais.component';
import { SalenPizzasComponent } from './paginas/salen-pizzas/salen-pizzas.component';
import { CrearPizzaComponent } from './componentes/crear-pizza/crear-pizza.component';
import { ModificarPizzaComponent } from './componentes/modificar-pizza/modificar-pizza.component';
import { BorrarPizzaComponent } from './componentes/borrar-pizza/borrar-pizza.component';
import { PizzaListadoComponent } from './componentes/pizza-listado/pizza-listado.component';


@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    BienvenidoComponent,
    LoginComponent,
    AltaRepartidorComponent,
    TablaPaisesComponent,
    FormRepartidorComponent,
    RepartidorDetalleComponent,
    RepartidorListadoComponent,
    DetalleRepartidorComponent,
    DetallePaisComponent,
    SalenPizzasComponent,
    CrearPizzaComponent,
    ModificarPizzaComponent,
    BorrarPizzaComponent,
    PizzaListadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
