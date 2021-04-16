import { Component, OnInit } from '@angular/core';

import { MensajeService } from '../mensaje.service';
import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado?: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private mensajeService: MensajeService
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  onSelect(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
    this.mensajeService.agregar(`UsuariosComponent: Usuario seleccionado id=${usuario.id}`)
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

}
