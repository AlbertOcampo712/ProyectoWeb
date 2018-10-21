import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

	// header: any=[
	// {
	// 	titulo:'Usuarios', url: '/home/registro'
	// }
	// ]
	header: any[] = [];


  constructor( public _usuarioService: UsuarioService) { 
  	this.header = this._usuarioService.header;
  }
}
