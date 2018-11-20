import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../servicios/subirArchivo/subir-archivo.service';
import { URL_SERVICIOS } from '../../config/config';
import { ItemSubir } from '../../models/itemSubir.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

	public archivos: ItemSubir[] = [];
	public contador= 0;
	public nombreArchivo;
	public url: string;

  constructor( public http: HttpClient,
  	private _subirArchivoService: SubirArchivoService) {

  	this.url = URL_SERVICIOS+"/archivo/";
  	}

  ngOnInit() {
  	this.cargarVideos();
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
