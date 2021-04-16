import { Injectable } from '@angular/core';

import { Usuario } from './usuario';
import { USUARIOS } from './usuarios-ficticios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }

  obtenerUsuarios(): Usuario[] {
    return USUARIOS;
  }
}
