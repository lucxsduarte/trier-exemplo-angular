import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit{

  public medicamentos: any = [];
  public lista: Array<string> = [];

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.medicamentos = this.service.getLista();
    this.lista = this.service.getLista();
  }

}
