import { Component, Input, OnInit, Output } from '@angular/core';
import { Cliente } from './cliente/shared/cliente.model';
import { Direccion } from './direccion/shared/direccion.model';
import { Usuario } from './shared/usuario.model';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExamenTAP2';
  // clienteDatos: Cliente;
  // direccionDatos: Direccion;

  cliente: Cliente;
  direccion: Direccion;
  listaUsuarios: Usuario[];
  usuario: Usuario;

  constructor() {
    this.cliente = new Cliente();
    this.direccion = new Direccion();
    this.usuario = new Usuario();
    this.listaUsuarios = [];
  }

  registrar() {
    this.usuario.cliente = this.cliente;
    this.usuario.direccion = this.direccion;
    this.usuario.calificacion = (10 * this.usuario.calificacion) + '%';
    this.listaUsuarios.push(this.usuario);
    console.log(this.listaUsuarios);
    this.cliente = new Cliente();
    this.direccion = new Direccion();
    this.usuario = new Usuario();
  }

  OnInit() { }
}
