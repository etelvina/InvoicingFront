import { Injectable } from "@angular/core";
import { Navar } from "../model/navar/navar";

@Injectable()
export class NavarService {
  navar: Navar[] = [
    {id: 0, text: 'Factura', icon: 'textdocument', path: 'invoice'},
    {id: 1, text: 'Persona', icon: 'user', path: 'user'},
    {id: 2, text: 'Inventario', icon: 'box', path: 'user'},
    {id: 3, text: 'Producto', icon: 'product', path: 'user'},
    {id: 4, text: 'Categoria de producto', icon: 'bulletlist', path: 'user'},
    {id: 5, text: 'Medio de pago', icon: 'money', path: 'user'},
    {id: 5, text: 'Tipo de entrega', icon: 'car', path: 'user'},
  ];

  getNavar(){
    return this.navar;
  }
}