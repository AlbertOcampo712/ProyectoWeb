import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EstudiantesComponent } from './usuarios/estudiantes/estudiantes.component';
import { DocentesComponent } from './usuarios/docentes/docentes.component';
import { AdminComponent } from './usuarios/admin/admin.component';
import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { ProgramacionComponent } from './semestres/primer/programacion/programacion.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component:  LoginComponent},
  { path: 'menusidebar', component:  MenuSidebarComponent},
  { path: 'pagina-principal', component:  PaginaPrincipalComponent},
  { path: 'estudiantes', component:  EstudiantesComponent},
  { path: 'docentes', component:  DocentesComponent},
  { path: 'admin', component:  AdminComponent},
  { path: 'programacion', component:  ProgramacionComponent},
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
    LoginComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
