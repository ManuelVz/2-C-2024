import { Personaje } from './Personaje';

export class Mago extends Personaje {
  constructor(nombre: string) {
    //Valores iniciales para el mago (nivel, pdv, ataque, y defensa), de paso, me va a servidor para la evo.
    //Para estos puntos segui un criterio; el mago tiene mas ataque, y menos defensa; el luchador mas defensa, y menos ataque; y el arquero un punto medio entre ambos.
    
    super(nombre, 1, 80, 15, 3); 
  }

  atacar(): void {
    console.log(`${this.nombre} lanza un hechizo de fuego.`);
  }

  defender(): void {
    console.log(`${this.nombre} usa un escudo magico.`);
  }
}
