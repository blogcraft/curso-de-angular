import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';
import { USUARIOS } from '../usuarios-ficticios';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  usuarios = USUARIOS;
  usuarioSeleccionado?: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(usuario: Usuario): void {
    this.usuarioSeleccionado = usuario;
  }

}
