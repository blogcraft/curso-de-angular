import { Component, Input, OnInit } from '@angular/core';

import {Usuario} from '../usuario';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styleUrls: ['./usuario-detalle.component.css']
})
export class UsuarioDetalleComponent implements OnInit {
  @Input() usuario?: Usuario;

  constructor() { }

  ngOnInit(): void {
  }

}
