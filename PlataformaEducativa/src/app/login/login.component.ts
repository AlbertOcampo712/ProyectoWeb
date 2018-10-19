import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( public router: Router, public _usuarioService: UsuarioService) { }

    recuerdame: boolean = false;
    user: string;

  ngOnInit() {
    this.user = localStorage.getItem('user') || '';
    if (this.user.length > 1) {
      // code...
      this.recuerdame = true;
    }

  }

  ingresar( forma: NgForm){

  		if (forma.invalid) {
  			return;
  		}

  		let usuario = new Usuario(null, null, null, forma.value.user, forma.value.password, null);
  		
        this._usuarioService.login(usuario, forma.value.recuerdame)
            .subscribe(correcto =>this.router.navigate(['/home/inicio']));
      //  if (forma.value.rol == 'Administrador') {
      //     this._usuarioService.login(usuario)
      // .subscribe(correcto =>this.router.navigate(['/home']));
      //   } 
      //   if (forma.value.rol == 'Estudiante') {
      //     this._usuarioService.login(usuario)
      // .subscribe(correcto =>this.router.navigate(['/home']));
      //   }
      //   if (forma.value.rol == 'Docente') {
      //     this._usuarioService.login(usuario)
      // .subscribe(correcto =>this.router.navigate(['/home']));
      //   }
      
  }

}
