import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../servicios/subirArchivo/subir-archivo.service';
import { URL_SERVICIOS } from '../../config/config';
import { ItemSubir } from '../../models/itemSubir.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-imagenes',
  templateUrl: './imagenes.component.html',
  styleUrls: ['./imagenes.component.css']
})
export class ImagenesComponent implements OnInit {

	public archivos: ItemSubir[] = [];
	public contador= 0;
	public nombreArchivo;
	public url: string;

  constructor(public http: HttpClient,
  	private _subirArchivoService: SubirArchivoService) 
  	{ this.url = URL_SERVICIOS+"/archivo/"; }

  ngOnInit() {
  this.cargarImagenes()
  }
  cargarImagenes(){
    let url = URL_SERVICIOS + '/imagenes'+'/Algebra Lineal';
		return this.http.get( url )
	    .subscribe( (resp: any) =>{
	 	this.archivos = resp.archivo;
	 	console.log(this.archivos)
	    });
	}
}
