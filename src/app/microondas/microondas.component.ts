import { Component } from '@angular/core';

@Component({
  selector: 'app-microondas',
  templateUrl: './microondas.component.html',
  styleUrls: ['./microondas.component.scss']
})
export class MicroondasComponent {

  public tempoVisor: number = 0;
  public totalVisor: string = "00:00";
  public tempoAdicional: number = 0;
  public contador: any;
  public contadorAtivo: boolean = false;
  public acrescentaTempo: boolean = false;

  public adicionaTempo(value: number) {
    
    if (!this.contadorAtivo) {
      if (this.tempoVisor === 0) {
        this.tempoVisor = value;
      } else {
        this.tempoVisor = this.tempoVisor * 10 + value;
      } 
      this.atualizarVisor();
    }
  }

  public iniciaContador(){
    this.contadorAtivo = true;
    this.contador = setInterval(() => {
      if (this.tempoVisor === 0) {
        this.paraContador();
        this.totalVisor = "PRONTO";
      } else {
        this.tempoVisor--;
        this.atualizarVisor();
      }
    }, 1000);
  
  }

  public paraContador() {
    if (this.contadorAtivo) {
      this.contadorAtivo = false;
      clearInterval(this.contador);
    }
    this.tempoVisor = 0;
    this.tempoVisor = 0;
    this.totalVisor = "00:00";
  }

  private atualizarVisor() {
    
    let X = Math.floor(this.tempoVisor / 1000);
    let Y = Math.floor((this.tempoVisor % 1000) / 100);
    let Z = Math.floor((this.tempoVisor  % 100) / 10);
    let W = this.tempoVisor  % 10;
    
    let zero = 0;
    let minutos = X * 10 + Y;
    let segundos = Z * 10 + W;
    
    if (segundos > 60 && segundos <= 99) {
      let diferença = segundos - 60;
      this.tempoVisor = this.tempoVisor - diferença;
      segundos = 59;
    } 
      
    if(this.tempoVisor > 60 && this.tempoVisor < 100){
      segundos = 59;
    }

    if (minutos < 10 && segundos < 10) {
      this.totalVisor = `${zero}${minutos}:${zero}${segundos}`;
    } else if (minutos < 10) {
      this.totalVisor = `${zero}${minutos}:${segundos}`;
    } else if (segundos < 10) {
      this.totalVisor = `${minutos}:${zero}${segundos}`;
    } else {
      this.totalVisor = `${minutos}:${segundos}`;
    }

  }
  formatTime(time: number): string {
    return time < 10 ? "0" + time : String(time);
  }

  public acrescentarTempo(tempo: number) {
    this.acrescentaTempo = true;
    this.tempoVisor += tempo;
    this.atualizarVisor();
  }
  
}