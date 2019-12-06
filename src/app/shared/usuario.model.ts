import { Cliente } from '../cliente/shared/cliente.model';
import { Direccion } from '../direccion/shared/direccion.model';
export class Usuario {
    cliente: Cliente;
    direccion: Direccion;
    calificacion: any;
}
