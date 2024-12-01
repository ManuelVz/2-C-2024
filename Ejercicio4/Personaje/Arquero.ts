import { Personaje } from './Personaje';

export class Arquero extends Personaje {
  constructor(nombre: string) {
    super(nombre, 1, 90, 8, 8);
  }

  atacar(): void {
    console.log(`${this.nombre} dispara una flecha.`);
  }

  defender(): void {
    console.log(`${this.nombre} utiliza buff de defensa.`);
  }
}