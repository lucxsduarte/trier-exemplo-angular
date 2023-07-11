import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-cp-table',
  templateUrl: './cp-table.component.html',
  styleUrls: ['./cp-table.component.scss']
})
export class CpTableComponent implements OnInit{

  public medicamentos: any = [];

  constructor(private service: ServiceService){}

  ngOnInit(): void {
    this.medicamentos = this.service.getLista();
  }

  clickMedicamento(med: any): void {
    this.service.clickMedicamento(med);
  }
}
