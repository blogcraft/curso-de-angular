import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MensajeService } from './mensaje.service';

import { Usuario } from './usuario';
import { USUARIOS } from './usuarios-ficticios';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private mensajeService: MensajeService) { }

  obtenerUsuarios(): Observable<Usuario[]> {
    const usuarios = of(USUARIOS);
    this.mensajeService.agregar('UsuarioService: Obtuvo usuario');
    return usuarios;
   }
}
