import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../servicios/header.service';
import { UsuarioService } from '../servicios/usuario/usuario.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	
  constructor( public _header: HeaderService, public _usuarioService: UsuarioService) { }

  ngOnInit() {
  }

}
