import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 	
    usuario: Usuario;
    token: string;

  constructor(public http: HttpClient, public router: Router) { 
  	this.cargarStorage();
  }

  logout(){
    this.usuario = null;
    this.token = '';
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  estaLogueado(){
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage(){
    if(localStorage.getItem('token')){
      this.token = localStorage.getItem('token');
       this.usuario = JSON.parse( localStorage.getItem('usuario'));
    }else{
      this.token = '';
      this.usuario = null;
    }
  }

  guardarStorage( id: string, token: string, usuario: Usuario){
       localStorage.setItem('id', id );
       localStorage.setItem('token', token );
       localStorage.setItem('usuario', JSON.stringify(usuario) );
       this.usuario = usuario;
       this.token = token; 
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
          this.guardarStorage( resp.id, resp.token, resp.usuario);
          return true;
      }));
  }



  crearUsuario( usuario: Usuario){
  		let url = URL_SERVICIOS + '/usuario';
  		return this.http.post(url, usuario)
  		.pipe(map((resp: any ) =>{
  				swal('Usuario Creado', usuario.user, 'success');
  			return resp.usuario;
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
