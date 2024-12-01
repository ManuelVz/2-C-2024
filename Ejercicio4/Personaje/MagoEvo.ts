// src/Personaje/MagoEvo.ts
import { Mago } from './Mago';

export class MagoEvo extends Mago {
  constructor(nombre: string) {
    super(nombre); //Heredo los atributos del mago (antes de evolucionar)

    // Cuando lo hago evolucionar, utilizo el constructor para aumentar el nivel, y las estadisticas base
    this.nivel += 5;
    this.puntosDeVida += 50;
    this.ataque += 20;
    this.defensa += 10;
  }

  //Cuando evoluciona, cambia el ataque basico
  atacar(): void {
    console.log(`${this.nombre} invoca una tormenta electrica.`);
  }
}
