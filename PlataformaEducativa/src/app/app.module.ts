import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LightboxModule } from 'ngx-lightbox';

import { APP_ROUTING } from './app.routing';

//Guards
import { LoginGuardGuard } from './servicios/guards/login-guard.guard';
import { AdminGuard } from './servicios/guards/admin.guard';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { UsuarioService } from './servicios/usuario/usuario.service';
import { SubirArchivoService} from './servicios/subirArchivo/subir-archivo.service';

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
import { SubirArchivoComponent } from './subir-archivo/subir-archivo.component';


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
    InicioComponent,
    SubirArchivoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    APP_ROUTING,
    LightboxModule
  ],
  providers: [UsuarioService, LoginGuardGuard, AdminGuard,SubirArchivoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
