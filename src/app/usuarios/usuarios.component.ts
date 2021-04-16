import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioSeleccionado?: Usuario;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
  }

  onSelect(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

  obtenerUsuarios(): void {
    this.usuarioService.obtenerUsuarios()
      .subscribe(usuarios => this.usuarios = usuarios);
  }

}
