import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  @Input() usuario?: Usuario;

  constructor(
    private route: ActivatedRoute,
    private usuarioService: UsuarioService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.obtenerUsuario();
  }

  obtenerUsuario() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.usuarioService.obtenerUsuario(id)
      .subscribe(usuario => this.usuario = usuario);
  }

  irAtras() {
    this.location.back();
  }
  
  guardar(): void {
    this.usuarioService.actualizarUsuario(this.usuario)
    .subscribe(() => this.irAtras());
   }
}
