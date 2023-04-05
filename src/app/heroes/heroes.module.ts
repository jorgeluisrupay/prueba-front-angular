import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [
    HeroComponent,
    ListadoComponent
  ],
  //que quiero que sea visible
  exports: [
    ListadoComponent
  ],
  //solo van modulos
  imports: [
    CommonModule
    //Si usamos directivas como el ngif, ngfor, etc es obligatorio importart este modulo
  ]
})

export class HeroesModule{}
