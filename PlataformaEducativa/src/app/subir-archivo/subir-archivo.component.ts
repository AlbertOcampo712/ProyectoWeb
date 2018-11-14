import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm} from '@angular/forms';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { SubirArchivoService } from '../servicios/subirArchivo/subir-archivo.service';
import { Usuario } from '../models/usuario.model';
import { ItemSubir } from '../models/subir.model';
import { URL_SERVICIOS } from '../config/config';
import { HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-subir-archivo',
  templateUrl: './subir-archivo.component.html',
  styleUrls: ['./subir-archivo.component.css']
})
export class SubirArchivoComponent implements OnInit  {

	forma: FormGroup;

	imagenSubir: File;//subir imagen

	usuario: Usuario;

	public itemSubir: ItemSubir;

	constructor(public _usuarioService: UsuarioService, public _subirArchivoService: SubirArchivoService){
		this.itemSubir = new ItemSubir("","","","");
	}

	ngOnInit(){
		this.forma = new FormGroup({
			semestre: new FormControl(null, Validators.required),
			materia: new FormControl(null, Validators.required),
			descripcion: new FormControl(null, Validators.required),
			archivo: new FormControl(null, Validators.required)});
	}

// subirimgenslide
  subirArchivo(archivo: File, semestre:string, ){
  	return new Promise ((resolve, reject)=>{

	  	let formData = new FormData();
	  	let xhr = new XMLHttpRequest();
	  	

	  	formData.append('semestre', this.itemSubir.semestre);
	  	formData.append('materia', this.itemSubir.materia);
	  	formData.append('descripcion', this.itemSubir.descripcion);
	  	

	  	formData.append('archivo', archivo, archivo.name);
	  	xhr.onreadystatechange = function(){
	  		if (xhr.readyState === 4) {
	  			if (xhr.status ===200) {
	  				console.log('Imagen subida');
	  				console.log(archivo);
	  				resolve( JSON.parse( xhr.response ) );
	  				}else{
	  					console.log('Fallo la subida');
	  					reject( JSON.parse( xhr.response ));
	  				}
	  			}
	  		};
  			let url = URL_SERVICIOS + '/upload/'+semestre;

  			xhr.open('POST', url, true);
  			xhr.send( formData );
  		});

	}


CambiarImagen(archivo: File){
	this.subirArchivo(archivo, this.itemSubir.semestre)
	.then(resp =>{
		console.log(resp);
	})
	.catch(resp=>{
		console.log(resp);
	})
}


// cargar fichero
	seleccionImagen(archivo: File){
		if(!archivo){
			this.imagenSubir = null;
			return;
		}
		this.imagenSubir = archivo;

	}


	nuevoSubir(){
		console.log(this.itemSubir);
	}

	cambiarImagen(){
		this.CambiarImagen(this.imagenSubir);
	}





 semestres: String[] = ["Primer semestre", 
                "Segundo semestre", 
                "Tercer semestre", 
                "Cuarto semestre", 
                "Quinto semestre", 
                "Sexto semestre", 
                "Séptimo semestre", 
                "Octavo semestre", 
                "Noveno semestre", 
                "Décimo semestre"];



public materias;
verSeleccion: string = '';

 cambiar(){
 	this.verSeleccion = this.itemSubir.semestre;
 	if (this.verSeleccion == "Primer semestre") {
 		this.materias = ["Calculo I",
                          "Algebra Lineal",
                          "Programación I",
                          "Fundamento de la Informática", 
                          "Ingles I",
                          "Sistema Contables"]; 
				console.log(this.verSeleccion);
       	}else{ if (this.verSeleccion == "Segundo semestre") {
 		 this.materias = ["Calculo II",
                          "Fisica I",
                          "Programacion II",
                          "Introducción a los Sistemas Operativos",
                          "Ingles II",
                          "Estadistica Descriptiva"];
                console.log(this.verSeleccion);
 			}else{
 				if(this.verSeleccion == "Tercer semestre"){
 					this.materias = ["Calculo III",
                          "Fisica II",
                          "Progrmación III",
                          "Teoria de Automatas y Lenguajes Formal",
                          "Teoria de Probabilidades",
                          "Combinatoria y Teoria de Grafos",
                          "Liderazgo Empresarial"];
                          console.log(this.verSeleccion);
 				}else{
 				if(this.verSeleccion == "Cuarto semestre"){
 					this.materias = ["Calculo IV",
                          "Teoría de la Comunicación y Señales",
                          "Análisis Numerico",
                          "Administraciones de las Organizaciones",
                          "Arquitectura de Computadoras",
                          "Programación IV",
                          "Metodología de la investigación"];
                          console.log(this.verSeleccion);
	 				}else{
	 					if(this.verSeleccion == "Quinto semestre"){
	 					this.materias = ["Base de Datos I",
	                          "Analisis de Sistemas I",
	                          "Investigación Operativa I",
	                          "Redes I",
	                          "Economía General",
	                          "Taller I"];
	                          console.log(this.verSeleccion);
		 				}else{
		 					if (this.verSeleccion == "Sexto semestre") {
		 						this.materias = ["Preparación y Evaluación de Proyectos",
			                          "Redes II",
			                          "Base de Datos II",
			                          "Analisis de Sistemas II",
			                          "Investigación Operativa II",
			                          "Taller I"];
			                          console.log(this.verSeleccion)
		 					}else{
		 						if (this.verSeleccion == "Séptimo semestre") {
		 						this.materias = ["Redes III",
				                          "Base de Datos III",
				                          "Ingeniería de Software I",
				                          "Tecnología Multimedia",
				                          "Taller II",
				                          "Optativa I"];
				                          console.log(this.verSeleccion);
		 						}else{
		 							if (this.verSeleccion == "Octavo semestre") {
		 							this.materias = ["Inteligencia Artificial",
					                          "Ingeniería de Software II",
					                          "Tecnología de Programación en Red",
					                          "Laboratorio de Seguridad en Redes",
					                          "Taller II",
					                          "Optativa II"];
					                          console.log(this.verSeleccion);
		 							}else{
		 								if (this.verSeleccion == "Noveno semestre") {
		 								this.materias = ["Robótica",
					                          "Transmisión de voz y video",
					                          "Legislación",
					                          "Taller III",
					                          "Optativa III"];
					                          console.log(this.verSeleccion);
		 								}else{
		 									if (this.verSeleccion == "Décimo semestre") {
		 										this.materias = ["Auditoría Informática",
							                          "Taller III",
							                          "Optativa IV"];
							                          console.log(this.verSeleccion);
		 									}
		 								}
		 							}
		 						}
		 					}
		 				}
		 			}
	 			}
 			}

 	}
 }
}
