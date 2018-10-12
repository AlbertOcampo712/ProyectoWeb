import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { APP_ROUTING } from './app.routing';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioService } from './servicios/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { CalculoComponent } from './semestres/primer/calculo.component';
import { AlgebraComponent } from './semestres/primer/algebra.component';
import { FundamentoComponent } from './semestres/primer/fundamento.component';
import { InglesComponent } from './semestres/primer/ingles.component';
import { ContableComponent } from './semestres/primer/contable.component';
import { PrograComponent } from './semestres/primer/progra.component';
import { InicioComponent } from './pagina-principal/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuSidebarComponent,
    PaginaPrincipalComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent,
    CalculoComponent,
    AlgebraComponent,
    FundamentoComponent,
    InglesComponent,
    ContableComponent,
    PrograComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
