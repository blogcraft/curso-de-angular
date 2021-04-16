import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: string[] = [];

  agregar(mensaje: string) {
    this.mensajes.push(mensaje);
  }

  liberar() {
    this.mensajes = [];
  }
}
