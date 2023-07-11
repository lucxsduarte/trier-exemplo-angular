import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-form',
  templateUrl: './cp-form.component.html',
  styleUrls: ['./cp-form.component.scss']
})
export class CpFormComponent implements OnInit{

  public nomeEscolhido: string = "";
  public valorEscolhido: number = 0;
  public qt: number = 0;
  public medicamentos: any = [];

  constructor(private service: ServiceService){}
  
  public addMed(nome: string, valor: string){
    return this.service.addMedicamento(nome, parseInt(valor));
  }
  
  ngOnInit(): void {
    this.service.emitEvent.subscribe({
      next: (res: number) => this.qt = res,
      error: (err: number) => this.qt = 0,
    });

    this.service.emitNome.subscribe((nome: string) => {
      // Faça o que precisa com o novo alerta
      this.nomeEscolhido = nome;
    });

    this.service.emitValor.subscribe((valor: number) => {
      // Faça o que precisa com o novo alerta
      this.valorEscolhido = valor;
    });
  }
}
  

