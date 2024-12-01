import { Personaje } from './Personaje';

export class Luchador extends Personaje {
  constructor(nombre: string) {
    super(nombre, 1, 120, 5, 12);
  }

  atacar(): void {
    console.log(`${this.nombre} golpea con su espada.`);
  }

  defender(): void {
    console.log(`${this.nombre} se cubre con su escudo.`);
  }
}