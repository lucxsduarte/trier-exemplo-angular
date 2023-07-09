import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-model',
  templateUrl: './ng-model.component.html',
  styleUrls: ['./ng-model.component.scss']
})
export class NgModelComponent {
  public nome: string = "";
  public nomes: Array<{ nome: string }> = [];

  adicionaNome(){
    if(this.nome != 'X'){
      this.nomes.push({nome: this.nome});
      this.nome = "";
    }
  }
}
