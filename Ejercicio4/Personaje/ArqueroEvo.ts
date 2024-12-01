import { Arquero } from './Arquero';

// Clase evolucion del arquero
export class ArqueroEvo extends Arquero {
  constructor(nombre: string) {
    super(nombre);

    this.nivel += 5;
    this.puntosDeVida += 40;
    this.ataque += 30;
    this.defensa += 12;
  }

  atacar(): void {
    console.log(`${this.nombre} dispara 3 flechas.`);
  }
}