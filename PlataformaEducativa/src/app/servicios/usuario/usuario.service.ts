import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient} from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 	
    usuario: Usuario;


  constructor(public http: HttpClient) { 
  	console.log('Servicio de usuario listo')
  }


  login(usuario: Usuario){
    let url = URL_SERVICIOS + '/login';
    return this.http.post(url, usuario)
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
          'El suario ha sido eliminado corractamente',
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
