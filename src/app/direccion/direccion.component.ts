import { Component, OnInit, Output, Input } from '@angular/core';
import { Direccion } from './shared/direccion.model';
import { Cliente } from '../cliente/shared/cliente.model';

@Component({
  selector: 'app-direccion',
  templateUrl: './direccion.component.html',
  styleUrls: ['./direccion.component.css']
})
export class DireccionComponent implements OnInit {

  @Input() direccionDatos: Direccion;
  // @Output() direccion: Direccion;
  // listaDireccion: Direccion[];
  constructor() {
    this.direccionDatos = new Direccion();
  }

  ngOnInit() { }
}
