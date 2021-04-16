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
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

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
        tap(_ => this.log('Obtuvo Usuarios')),
        catchError(this.manejarError<Usuario[]>('obtenerUsuarios', []))
      );
  }

  obtenerUsuario(id: number): Observable<Usuario> {
    const url = `${this.usuariosUrl}/${id}`;
    return this.http.get<Usuario>(url)
      .pipe(
        tap(_ => this.log(`Usuario Buscado id=${id}`)),
        catchError(this.manejarError<Usuario>(`obtenerUsuario id=${id}`))
      );
  }

  /** PUT: Actualiza el usuario en el servidor */
  actualizarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(this.usuariosUrl, usuario, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Usuario Actualizado id=${usuario.id}`)),
        catchError(this.manejarError<any>('actualizarUsuario'))
      );
  }

  /** POST: agrega un nuevo usuario al servidor */
  agregarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.usuariosUrl, usuario, this.httpOptions)
      .pipe(
        tap((nuevoUsuario) => console.log(`Usuario Agregado con id=${nuevoUsuario.id}`)),
        catchError(this.manejarError<Usuario>('agregarUsuario'))
      );
  }

  /** DELETE: borrar un usuario del servidor */
  borrarUsuario(usuario: Usuario | number): Observable<Usuario> {
    const id = typeof usuario === 'number' ? usuario : usuario.id;
    const url = `${this.usuariosUrl}/${id}`;

    return this.http.delete<Usuario>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`Usuario Borrado con id =${id}`)),
        catchError(this.manejarError<Usuario>('borrarUsuario'))
      );
  }

  private manejarError<T>(operacion = 'operacion', resultado?: T) {
    return (error: any): Observable<T> => {
      console.log(error);
      this.log(`${operacion} fallida: ${error.message}`);
      return of(resultado as T);
    }
  }
}
