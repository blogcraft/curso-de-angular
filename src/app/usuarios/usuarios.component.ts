import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];

  constructor(
    private usuarioService: UsuarioService,
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  } 1

  agregar(nombre: string): void {
    nombre = nombre.trim();
    if (!nombre) { return; }
    this.usuarioService.agregarUsuario({ nombre } as Usuario)
      .subscribe(usuario => {
        this.usuarios.push(usuario);
      })
  }

  borrar(usuario: Usuario): void {
    this.usuarios = this.usuarios.filter(h => h !== usuario);
    this.usuarioService.borrarUsuario(usuario).subscribe()
  }

}
