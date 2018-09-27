import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UsuarioService } from './servicios/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { EstudiantesComponent } from './usuarios/estudiantes/estudiantes.component';
import { DocentesComponent } from './usuarios/docentes/docentes.component';
import { AdminComponent } from './usuarios/admin/admin.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProgramacionComponent } from './semestres/primer/programacion/programacion.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  
  { path: 'pagina-principal', component:  PaginaPrincipalComponent,
  children:[
        { path: 'programacion', component:  ProgramacionComponent},
        { path: 'registro', component:  RegistroComponent},
        { path: '**', redirectTo: '/pagina-principal', pathMatch: 'full' }
        ]
    },
    {path: 'programacion', component:  ProgramacionComponent},
{ path: 'login', component:  LoginComponent},
  { path: 'registro', component:  RegistroComponent},
  { path: 'estudiantes', component:  EstudiantesComponent},
  { path: 'docentes', component:  DocentesComponent},
  { path: 'admin', component:  AdminComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];
@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    DocentesComponent,
    AdminComponent,
    MenuSidebarComponent,
    PaginaPrincipalComponent,
    ProgramacionComponent,
    LoginComponent,
    RegistroComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
