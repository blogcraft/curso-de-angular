import { Injectable } from '@angular/core';
import { Observable , of } from 'rxjs';

import { Usuario } from './usuario';
import { USUARIOS } from './usuarios-ficticios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  obtenerUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    return usuarios;
  }
}
