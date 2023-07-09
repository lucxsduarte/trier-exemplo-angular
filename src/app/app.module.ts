import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JovemdevTitleComponent } from './jovemdev-title/jovemdev-title.component';
import { ExemploBindingComponent } from './exemplo-binding/exemplo-binding.component';
import { FormsModule } from '@angular/forms';
import { CalculoImcComponent } from './calculo-imc/calculo-imc.component';
import { MenuComponent } from './menu/menu.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { NgModelComponent } from './ng-model/ng-model.component';
import { NgIfComponent } from './ng-if/ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgPipesComponent } from './ng-pipes/ng-pipes.component';
import { MicroondasComponent } from './microondas/microondas.component';
import { PaiFilhoComponent } from './pai-filho/pai-filho.component';
import { FilhoPaiComponent } from './filho-pai/filho-pai.component';
import { ServicesComponent } from './services/services.component';
import { InvertePipe } from './inverte.pipe';
import { SqrtPipe } from './sqrt.pipe';

@NgModule({
  declarations: [
    AppComponent,
    JovemdevTitleComponent,
    ExemploBindingComponent,
    CalculoImcComponent,
    MenuComponent,
    NgClassComponent,
    NgStyleComponent,
    NgModelComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    NgPipesComponent,
    MicroondasComponent,
    PaiFilhoComponent,
    FilhoPaiComponent,
    ServicesComponent,
    InvertePipe,
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
