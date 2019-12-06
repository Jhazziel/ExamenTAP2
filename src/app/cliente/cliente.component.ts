import { Component, OnInit, Output } from '@angular/core';
import { Cliente } from './shared/cliente.model';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  // @Output() clienteMsg = new EventEmitter<any>();

  clienteDatos: Cliente;
  constructor() {
    this.clienteDatos = new Cliente();
  }

  ngOnInit() {
  }

  // alerta(msg: Cliente){
  //   this.clienteMsg.emit(msg);
  //   console.log(msg);
  // }
}
