import { Injectable } from '@angular/core';

import { URL_SERVICIOS } from '../../config/config';
import { ItemSubir } from '../../models/subir.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

public itemSubir: ItemSubir;
 constructor( ) { }
	


// // subirimgenslide
//   subirArchivo(archivo: File, semestre:string, ){
//   	return new Promise ((resolve, reject)=>{

// 	  	let formData = new FormData();
// 	  	let xhr = new XMLHttpRequest();
	  	

// 	  	formData.append('semestre', semestre);
// 	  	formData.append('materia', "materia");
	  	

// 	  	formData.append('archivo', archivo, archivo.name);
// 	  	xhr.onreadystatechange = function(){
// 	  		if (xhr.readyState === 4) {
// 	  			if (xhr.status ===200) {
// 	  				console.log('Imagen subida');
// 	  				console.log(archivo);
// 	  				resolve( JSON.parse( xhr.response ) );
// 	  				}else{
// 	  					console.log('Fallo la subida');
// 	  					reject( JSON.parse( xhr.response ));
// 	  				}
// 	  			}
// 	  		};
//   			let url = URL_SERVICIOS + '/upload/'+semestre;

//   			xhr.open('POST', url, true);
//   			xhr.send( formData );
//   		});

// 	}
}
