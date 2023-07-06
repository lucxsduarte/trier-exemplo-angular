import { Component } from '@angular/core';

@Component({
  selector: 'app-exemplo-binding',
  templateUrl: './exemplo-binding.component.html',
  styleUrls: ['./exemplo-binding.component.scss']
})
export class ExemploBindingComponent {
  public n1: number = 10;
  public n2: number = 15;
  public texto: string = "";

  public alteraValores(){
    if(this.n1 == 10){
      this.n1 = 20;
      this.n2 = 25;
    }else{
      this.n1 = 10;
      this.n2 = 15;
    }
  }

  public diminuiN1(){
    this.n1--;
  }

  public alteraIMG():string{
    if(this.n1 > 0 ){
      return "https://i0.wp.com/techwek.com/wp-content/uploads/2020/12/Imagem-para-perfil.jpg?resize=512%2C473&ssl=1";
    }
    return "https://zaplinksbrasil.com.br/wp-content/uploads/2020/12/6ea5239f0d5a6b473b76293b6a17b454.jpg";
  }
}
