import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UsuarioService } from '../usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
constructor(
	public _usuarioService: UsuarioService
	){}

  canActivate() {

  	// if (this._usuarioService.usuario.rol == 'Administrador') {
  			
  	// 	}	



    return true;
  }
}
