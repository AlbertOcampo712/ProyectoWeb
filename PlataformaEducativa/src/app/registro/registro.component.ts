import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { Usuario } from '../models/usuario.model';

import * as swal from 'sweetalert'; 


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

	forma: FormGroup;
  constructor(public _usuarioService: UsuarioService) { }

// sonIguales(campo1:string, campo2:string){

//     return ( group:FormGroup)=>{
      
//       let pass1 = group.controls[campo1].value;
//       let pass2 = group.controls[campo2].value;

//       if( pass1 === pass2){
//         return null;
//       }

//       return{
//         sonIguales: true
//       }; 
//     }

//   }

  ngOnInit() {
      // init_plugins();

  	this.forma = new FormGroup({
  		nombre: new FormControl(null, Validators.required),
  		apellido: new FormControl(null, Validators.required),
  		ru: new FormControl(null, Validators.required),
  		user: new FormControl(null, Validators.required),
  		password: new FormControl(null, Validators.required),
  		rol: new FormControl(null, Validators.required),
  	});

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
   });
}


}
