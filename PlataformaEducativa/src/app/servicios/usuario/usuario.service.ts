import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 	
    usuario: Usuario;
    token: string;
    header: any = [];

  constructor(public http: HttpClient, public router: Router) { 
  	this.cargarStorage();
  }

  logout(){
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    localStorage.removeItem('header');

    this.router.navigate(['/login']);
  }

  estaLogueado(){
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
       this.usuario = JSON.parse( localStorage.getItem('usuario'));
       this.header = JSON.parse( localStorage.getItem('header'));
    }else{
      this.token = '';
      this.usuario = null;
      this.header = [];
    }
  }

  guardarStorage( id: string, token: string, usuario: Usuario, header: any){
       localStorage.setItem('id', id );
       localStorage.setItem('token', token );
       localStorage.setItem('usuario', JSON.stringify(usuario) );
       localStorage.setItem('header', JSON.stringify(header) );
       this.usuario = usuario;
       this.token = token;
       this.header = header; 
  }

  login(usuario: Usuario, recordar: boolean = false){

    if (recordar ) {
      localStorage.setItem('user', usuario.user);
    }else{
      localStorage.removeItem('user');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
    .pipe(map((resp: any) =>{
          this.guardarStorage( resp.id, resp.token, resp.usuario, resp.header);
          return true;
      }),catchError(err => {
        swal('Error en el login',err.error.mensaje, 'error');
        return throwError(err);
        
    }));
  }



  crearUsuario( usuario: Usuario){
  		let url = URL_SERVICIOS + '/usuario';
  		return this.http.post(url, usuario)
  		.pipe(map((resp: any ) =>{
  				swal('Usuario Creado', usuario.user, 'success');
  			return resp.usuario;
  		}),catchError(err => {
        swal(err.error.mensaje, err.error.errors.message, 'error');
        return throwError(err);
        
    }));
  }

cargarUsuarios(desde: number = 0){
    let url = URL_SERVICIOS + '/usuario?desde=' + desde;
    return this.http.get( url );
}

borrarUsuario(id:string){
  let url = URL_SERVICIOS + "/usuario/" + id;
  return this.http.delete( url )
  .pipe(map((resp: any ) =>{
          swal(
          'Borrado!',
          'El usuario ha sido borrado corractamente',
          'success'
        )
        return true;
      }));
}

buscarUsuarios(termino: string){
    let url = URL_SERVICIOS + '/busqueda/todo/'+termino;
    return this.http.get( url )
        .pipe(map((resp: any ) => resp.usuarios ));
    }


}
