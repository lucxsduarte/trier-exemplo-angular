import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-pipes',
  templateUrl: './ng-pipes.component.html',
  styleUrls: ['./ng-pipes.component.scss']
})
export class NgPipesComponent {
  public data: Date = new Date();
  public nome: string = "Fulano de Tal";
  public valor: number = 12345.67;
  public palavra: string = "";
  public quadrado: number = 0;
}
