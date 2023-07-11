import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpPaiComponent } from './cp-pai/cp-pai.component';
import { CpFilhoComponent } from './cp-filho/cp-filho.component';



@NgModule({
  declarations: [
    CpPaiComponent,
    CpFilhoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CpPaiComponent
  ]
})
export class MdFilhoPaiModule { }
