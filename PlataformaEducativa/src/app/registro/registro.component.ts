import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';
import { URL_SERVICIOS } from '../config/config';
import { map, catchError } from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

import swal from 'sweetalert2';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuarios: Usuario[] = [];
  totalRegistros: number = 0;
  desde: number = 0;
	forma: FormGroup;
  cargando: boolean = true;
  public usuario: Usuario;

  constructor(public _usuarioService: UsuarioService,public http: HttpClient) { 
      this.usuario = new Usuario("","","","","","");
    }


  ngOnInit() {
 
  	this.forma = new FormGroup({
  		nombre: new FormControl(null, Validators.required),
  		apellido: new FormControl(null, Validators.required),
  		ru: new FormControl(null, Validators.required),
  		user: new FormControl(null, Validators.required),
  		password: new FormControl(null, Validators.required),
  		rol: new FormControl(null, Validators.required),
  	});
    this.cargarUsuarios();
  }

registrarUsuario(){
   if(this.forma.invalid){
    return;
  }

	let usuario = new Usuario(
   this.forma.value.nombre,
   this.forma.value.apellido,
   this.forma.value.ru,
   this.forma.value.user,
   this.forma.value.password,
   this.forma.value.rol,

   );
 
 this._usuarioService.crearUsuario(usuario)
   .subscribe(resp =>{
     console.log(resp);
     this.cargarUsuarios();
   });

   if (this.forma.valid) {
     this.forma.reset();
   }
}




cargarUsuarios(){
    this._usuarioService.cargarUsuarios( this.desde )
    .subscribe( (resp: any) =>{
        this.totalRegistros = resp.total;
        this.usuarios = resp.usuarios;
        this.cargando = false;
    });
}

borrarUsuario(usuario: Usuario){
if (usuario.rol == 'Administrador') {
    swal({
        type: 'error',
        title: 'Error',
        text: 'No es posible borrar a un Administrador'
      })
}
else{
  swal({
      title: '¿Estas Seguro?',
      text: "No podras revertir esto!",
      type: 'warning',
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrar!',
    }).then(borrar => {
      
      if (borrar.value) {
        this._usuarioService.borrarUsuario(usuario._id)
        .subscribe(borrado => {
         console.log(borrado);
         this.cargarUsuarios();
      });
      }
    })
}
  
}





ActualizarUsuario(usuario: Usuario){
   let url = URL_SERVICIOS + "/usuario/" + this.usuario._id;
    return this.http.put(url, usuario)

}
putUsuario(usuario:Usuario){
  this.ActualizarUsuario(usuario)
  .subscribe(resp =>{
    console.log(resp);
  })
}


actualizarUsuario(){
  this.ActualizarUsuario(this.usuario);
}
abrirModal(usuario: Usuario){
  this._usuarioService.usuario = usuario;
  console.log(this._usuarioService.usuario._id);
}



buscarUsuario(termino: string){
   
    if (termino.length <= 0) {
        this.cargarUsuarios();
        return;
    }
    this._usuarioService.buscarUsuarios(termino)
      .subscribe((usuarios: Usuario[]) => {
        this.usuarios = usuarios;
      });
}


}
