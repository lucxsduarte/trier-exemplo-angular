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
    const minutos = Math.floor(this.tempoVisor / 60);
    const segundos = this.tempoVisor % 60;
    this.totalVisor = this.formatTime(minutos) + ":" + this.formatTime(segundos);
  }

  formatTime(time: number): string {
    return time < 10 ? "0" + time : String(time);
  }

  public acrescentarTempo(tempo: number) {
    this.tempoVisor += tempo;
    this.atualizarVisor();
  }
}