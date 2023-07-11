import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  public nomeSelecionado: string = "";
  public valorSelecionadio: number = 0;
  public emitEvent = new EventEmitter();

  private medicamentos: any = [
    {nome: "Rivotril", valor: 10}
  ];

  public getLista(){
    return this.medicamentos;
  }

  public addMedicamento(nomeMedicamento: string, valorMedicamento: number){
    this.medicamentos.push({nome: nomeMedicamento, valor: valorMedicamento })
    this.emitEvent.emit(this.medicamentos.length);
    return this.medicamentos;
  }

  public clickMedicamento(med: any){
    this.nomeSelecionado = med.nome;
    this.valorSelecionadio = med.valor;
  }

  constructor() { }
}
