import { RouterModule, Routes } from '@angular/router';

import { MenuSidebarComponent } from './menu-sidebar/menu-sidebar.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './pagina-principal/inicio.component';

// -----------------------------------------
// PRIMER SEMESTRE
// -----------------------------------------
import { CalculoComponent } from './semestres/primer/calculo.component';
import { AlgebraComponent } from './semestres/primer/algebra.component';
import { FundamentoComponent } from './semestres/primer/fundamento.component';
import { InglesComponent } from './semestres/primer/ingles.component';
import { ContableComponent } from './semestres/primer/contable.component';
import { PrograComponent } from './semestres/primer/progra.component';



const APP_ROUTES: Routes = [
  
  { path: 'home', component:  PaginaPrincipalComponent,
  children:[
        { path: 'inicio', component:  InicioComponent},
        { path: 'registro', component:  RegistroComponent},
        { path: 'calculo', component:  CalculoComponent},
        { path: 'algebra', component:  AlgebraComponent},
        { path: 'fundamento', component:  FundamentoComponent},
        { path: 'ingles', component:  InglesComponent},
        { path: 'contable', component:  ContableComponent},
        { path: 'progra', component:  PrograComponent},
        { path: '**', redirectTo: '/login', pathMatch: 'full' }
        ]
    },

  { path: 'login', component:  LoginComponent},
  
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login', pathMatch: 'full' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);