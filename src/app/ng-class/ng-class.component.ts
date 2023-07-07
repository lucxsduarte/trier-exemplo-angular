import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.scss']
})
export class NgClassComponent {
  public numeroUm: number = 0;
  public numeroDois: number = 0;
  public resultadoSoma: number = 0;

  public somaMaiorQue50():boolean {
    this.resultadoSoma = this.numeroUm + this.numeroDois;
    return this.numeroUm + this.numeroDois > 50;
  }
}
