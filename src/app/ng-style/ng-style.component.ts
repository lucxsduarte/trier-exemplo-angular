import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.scss']
})
export class NgStyleComponent {

  public raioInicial: number = 100;
  public raioAtual: number = this.raioInicial;

  aumentaRaio():void {
    this.raioAtual += 20;
    if (this.raioAtual > 180) {
      this.raioAtual = 100;
    }

  }
}
