import { Component, Input } from '@angular/core';
import { Cliente } from './cliente/shared/cliente.model';
import { Direccion } from './direccion/shared/direccion.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenTAP2';
  // clienteDatos: Cliente;
  // direccionDatos: Direccion;

  @Input() cliente: Cliente;
  @Input() direccion: Direccion;

  constructor() {
    this.cliente = new Cliente();
    this.direccion = new Direccion();
  }
  registrar() {
    console.log(this.cliente.nombres);
    console.log(this.direccion.direccion);
  }
}
