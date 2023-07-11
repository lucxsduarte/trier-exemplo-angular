import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExemploServiceService {
  
  public emitEvent = new EventEmitter();

  private lista: Array<string> = [];

  public getList(){
    return this.lista;
  }

  public adiciona(valor: string){
    this.lista.push(valor);
    this.emitEvent.emit(this.lista.length);
    return this.lista;
  }

  constructor() { }
}
