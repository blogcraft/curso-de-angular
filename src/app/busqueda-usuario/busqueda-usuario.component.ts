import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { UsuarioService } from '../usuario.service';

import { Usuario } from '../usuario';

@Component({
  selector: 'app-busqueda-usuario',
  templateUrl: './busqueda-usuario.component.html',
  styleUrls: ['./busqueda-usuario.component.css']
})
export class BusquedaUsuarioComponent implements OnInit {
  usuarios$: Observable<Usuario[]>;
  private criteriosBusqueda = new Subject<string>();

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.usuarios$ = this.criteriosBusqueda.pipe(
      // espera 300ms después de cada tecla antes de considerar el criterio
      debounceTime(300),
      // Ignorar si el ultimo criterio es el mismo que el anterior
      distinctUntilChanged(),
      // cambiar a nuevo Observable de busqueda cada vez que el termino cambie
      switchMap((criterio: string) => this.usuarioService.buscarUsuarios(criterio)),
    );
  }

  // Agrega un criterio al stream del Observable.
  buscar(criterio: string): void {
    this.criteriosBusqueda.next(criterio);
  }
}
