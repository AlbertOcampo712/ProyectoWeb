import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../servicios/subirArchivo/subir-archivo.service';
import { URL_SERVICIOS } from '../../config/config';
import { ItemSubir } from '../../models/itemSubir.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-algebra',
  templateUrl: './algebra.component.html',
  styleUrls: ['./calculo.component.css']
})
export class AlgebraComponent implements  OnInit{

	public archivos: ItemSubir[] = [];
	public contador= 0;
	public nombreArchivo;
	public url: string;

	public identificado;

  constructor( public http: HttpClient,
  	private _subirArchivoService: SubirArchivoService
  	) { 
  	this.url = URL_SERVICIOS+"/archivo/";
  }

   ngOnInit(){

   }
   
	cargarImagenes(){
    let url = URL_SERVICIOS + '/imagenes'+'/Algebra Lineal';
		return this.http.get( url )
	    .subscribe( (resp: any) =>{
	 	this.archivos = resp.archivo;
	 	console.log(this.archivos)
	    });
	}
	
	cargarVideos(){
		let url = URL_SERVICIOS + '/videos' + '/Algebra Lineal';
		return this.http.get(url)
		.subscribe((resp: any) =>{
			this.archivos = resp.archivo;
			console.log(this.archivos)
		})
	}

}
