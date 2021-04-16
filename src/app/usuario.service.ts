import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

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
    return this.http.get<Usuario[]>(this.usuariosUrl)
      .pipe(
        catchError(this.manejarError<Usuario[]>('obtenerUsuarios', []))
      );
  }

  obtenerUsuario(id: number): Observable<Usuario> {
    const usuario = USUARIOS.find(u => u.id == id) as Usuario;
    this.mensajeService.agregar(`UsuarioService: usuario buscado id=${id}`);
    return of(usuario);
  }

  private manejarError<T>(operacion = 'operacion', resultado?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operacion} fallida: ${error.message}`);
      return of(resultado as T);
    }
  }
}
