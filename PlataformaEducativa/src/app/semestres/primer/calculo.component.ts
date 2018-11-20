import { Component, OnInit } from '@angular/core';
import { SubirArchivoService } from '../../servicios/subirArchivo/subir-archivo.service';
import { URL_SERVICIOS } from '../../config/config';
import { ItemSubir } from '../../models/itemSubir.model';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-calculo',
  templateUrl: './calculo.component.html',
  styleUrls: ['./calculo.component.css']
})
export class CalculoComponent implements OnInit {

  constructor( public http: HttpClient ) { }

  ngOnInit() {
  }

}
