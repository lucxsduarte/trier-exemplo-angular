import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.scss']
})
export class NgForComponent {
  contador : number = 4;
  nomeSelecionado: string = "";
  quantidadeSelecionada: number = 0;

  public frutas: any = [
    {nome: 'Maçã', quantidade: 10},
    {nome: 'Banana', quantidade: 10},
    {nome: 'Laranja', quantidade: 10},
    {nome: 'Uva', quantidade: 10}
  ];

  public comerMaca(): void {
    const maca = this.frutas.find((value: any) => value.nome === 'Maçã');
    if (maca && maca.quantidade > 0) {
      maca.quantidade -= 1;
    }
  }

  public comerBanana(): void {
    const banana = this.frutas.find((value: any) => value.nome === 'Banana');
    if (banana && banana.quantidade > 0) {
      banana.quantidade -= 1;
    }
  }

  public comerLaranja(): void {
    const laranja = this.frutas.find((value: any) => value.nome === 'Laranja');
    if (laranja && laranja.quantidade > 0) {
      laranja.quantidade -= 1;
    }
  }

  public comerUva(): void {
    const uva = this.frutas.find((value: any) => value.nome === 'Uva');
    if (uva && uva.quantidade > 0) {
      uva.quantidade -= 1;
    }
  }

  public clickFruta(fruta: any){
    console.log(fruta);
    this.nomeSelecionado = fruta.nome;
    this.quantidadeSelecionada = fruta.quantidade;
  }
}
