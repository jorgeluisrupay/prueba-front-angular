import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  heroes: string[] = ['spiderman','Ironman','Hulk','Luffy','Tilin']
  heroeBorrado: string = '';

  borrarHeroe(){
   this.heroeBorrado =  this.heroes.shift() || '';

  }
}
