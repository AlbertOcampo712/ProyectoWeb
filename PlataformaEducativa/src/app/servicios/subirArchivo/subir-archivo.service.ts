import { Injectable } from '@angular/core';
import { URL_SERVICIOS} from '../../config/config';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SubirArchivoService {

 constructor( public http: HttpClient ) { }
	
	cargarArchivos(){
		let url = URL_SERVICIOS + '/imagenes';
		return this.http.get( url );
	}
}
