import { Luchador } from './Luchador';


// Clase evolucion del luchador
export class LuchadorEvo extends Luchador {
  constructor(nombre: string) {
    super(nombre);

    this.nivel += 5;
    this.puntosDeVida += 60;
    this.ataque += 25;
    this.defensa += 15;
  }

  atacar(): void {
    console.log(`${this.nombre} ejecuta un combo con su espada.`);
  }
}