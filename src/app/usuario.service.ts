import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { MensajeService } from './mensaje.service';

import { Usuario } from './usuario';
import { USUARIOS } from './usuarios-ficticios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private usuariosUrl = 'api/usuarios';

  constructor(
    private http: HttpClient,
    private mensajeService: MensajeService
  ) { }

  private log(mensaje: string) {
    this.mensajeService.agregar(`UsuarioService: ${mensaje}`);
  }

  obtenerUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.mensajeService.agregar('UsuarioService: Obtuvo usuario');
    return usuarios;
  }

  obtenerUsuario(id: number): Observable<Usuario> {
    const usuario = USUARIOS.find(u => u.id == id) as Usuario;
    this.mensajeService.agregar(`UsuarioService: usuario buscado id=${id}`);
    return of(usuario);
  }
}
