import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.scss']
})
export class NgIfComponent {
  
  public nota1: boolean = false;
  public nota3: boolean = false;
  public nota2: boolean = false;

  public clickNota1(){
    this.nota1 = !this.nota1;
    this.nota2 = false;
    this.nota3 = false;
  }

  public clickNota2(){
    if (this.nota1 = true) {
      this.nota1 = false;
    }
    this.nota2 = !this.nota2;
    this.nota3 = false;
  }

  public clickNota3(){
    if (this.nota1 = true) {
      this.nota1 = false;
    }
    if (this.nota2 = true) {
      this.nota2 = false;
    }
    this.nota3 = !this.nota3;
  }
}
