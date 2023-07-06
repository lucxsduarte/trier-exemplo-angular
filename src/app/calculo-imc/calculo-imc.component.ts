import { Component } from '@angular/core';

@Component({
  selector: 'app-calculo-imc',
  templateUrl: './calculo-imc.component.html',
  styleUrls: ['./calculo-imc.component.scss']
})
export class CalculoImcComponent {
  public idadeDigitada: string = "";
  public sexoEscolhido: string = "";
  public pesoDigitado: number = 0;
  public alturaDigitada: number = 0;
  public resultado: string = "";
  public status: string = "";

  public enviaFormulario(){
    const imc = this.pesoDigitado / (this.alturaDigitada * this.alturaDigitada);
    
    if (this.sexoEscolhido == "Feminino") {
      if (imc < 19.1 ) {
          this.status = "status: MAGREZA";
        } else if (imc <= 25.8) {
          this.status = "status: NORMAL";
        } else if (imc >= 25.9 && imc <= 27.3 ) {
          this.status = "status: POUCO ACIMA DO PESO";   
        } else if (imc >= 27.4 && imc <= 32.3){
          this.status = "status: SOBREPESO";
        } else if (imc > 32.3){
          this.status = "status: OBESIDADE";
        } 
      this.resultado = `Seu imc é ${imc} e seu ${this.status}`;

    } else if (this.sexoEscolhido == "Masculino") {
      if (imc < 20.7 ) {
        this.status = "status: MAGREZA";
        } else if (imc >= 20.7 && imc <= 26.4) {
          this.status = "status: NORMAL";
        } else if (imc >= 26.5 && imc <= 27.8 ) {
          this.status = "status: POUCO ACIMA DO PESO";   
        } else if (imc >= 27.9 && imc <= 31.1){
          this.status = "status: SOBREPESO";
        } else if (imc > 31.2){
          this.status = "status: OBESIDADE";
        }
        this.resultado = `Seu imc é ${imc} e seu ${this.status}`;
    }
  }

  public verificaDados():boolean {
    if (this.pesoDigitado != 0 && this.alturaDigitada != 0) {
      return false;
    } else {
      return true;
    }
  }
}
