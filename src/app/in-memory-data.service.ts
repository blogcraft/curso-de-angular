import { Injectable } from '@angular/core';

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Usuario } from './usuario';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const usuarios = [
      { id: 1, nombre: 'Juan' },
      { id: 2, nombre: 'Pepe' },
      { id: 3, nombre: 'Angelica' },
      { id: 4, nombre: 'Macarena' },
      { id: 5, nombre: 'Pedro' },
      { id: 6, nombre: 'Margarita' },
      { id: 7, nombre: 'Carlos' },
      { id: 8, nombre: 'Daniela' },
      { id: 9, nombre: 'Carolina' },
      { id: 10, nombre: 'Rafael' },
    ];
    return { usuarios };
  }
  genId(usuarios: Usuario[]): number {
    return usuarios.length > 0 ? Math.max(...usuarios.map(hero => hero.id)) + 1 : 1;
  }
}
