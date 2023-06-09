import {Injectable} from '@angular/core'
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()

export class DbzService {

  private _personajes : Personaje[] = [
    {
      nombre: 'krillin',
      poder: 700
    },
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegueta',
      poder: 8000
    }
  ]

  get personajes() : Personaje[] {
    return [...this._personajes];
  }

  constructor(){}

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje)
  }

}
