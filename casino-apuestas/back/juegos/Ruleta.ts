import { Juego } from "../abstracts/Juegos";

// Esta clase representa el juego de Ruleta
export class Ruleta extends Juego {
  constructor() {
    // Llamo al constructor de la clase base y le paso el nombre del juego y la apuesta minima
    super("Ruleta", 10);
  }

  // Este metodo define la logica para jugar a la ruleta
  public jugar(apuesta: number, numeroElegido: number): string {
    // Verifico que la apuesta cumpla con la apuesta minima
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta debe ser al menos de ${this.apuestaMinima}.`;
    }

    // Aca me aseguro de que el numero elegido este dentro del rango permitido
    if (numeroElegido < 0 || numeroElegido > 36) {
      return `El numero elegido debe estar entre 0 y 36.`;
    }

    // Genero un numero ganador aleatorio entre 0 y 36
    const numeroGanador = Math.floor(Math.random() * 37);

    // Si el numero elegido coincide con el ganador, calculo la ganancia y devuelvo el mensaje
    if (numeroGanador === numeroElegido) {
      const ganancia = apuesta * 35;
      return `Numero ganador: ${numeroGanador}.¡Ganaste ${ganancia}! `;
    }

    // Si no, devuelvo el mensaje de que perdio
    return `Numero ganador: ${numeroGanador}. Perdiste ${apuesta}`;
  }
}
