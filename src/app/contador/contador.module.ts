import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContadorComponent } from './contador.component';

@NgModule({
  declarations: [
    ContadorComponent
  ],
  //que quiero que sea visible
  exports: [
    ContadorComponent
  ],
  //solo van modulos
  imports: [
    //CommonModule
    //Si usamos directivas como el ngif, ngfor, etc es obligatorio importart este modulo
  ]
})

export class ContadorModule{}
