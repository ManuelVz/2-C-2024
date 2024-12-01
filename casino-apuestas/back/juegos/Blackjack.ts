import { Juego } from "../abstracts/Juegos";

// Clase para representar el juego de Blackjack
export class Blackjack extends Juego {
  // Constructor: defino el nombre del juego como "Blackjack" y una apuesta minima de 20
  constructor() {
    super("Blackjack", 20); // Llamo al constructor de la clase padre
  }

  // Metodo para jugar al Blackjack
  public jugar(apuesta: number): string {
    // Primero valido que la apuesta sea valida según el minimo
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta debe ser al menos de ${this.apuestaMinima}.`; // Mensaje si no alcanza
    }

    // Genero dos puntajes aleatorios: uno para el jugador y otro para la banca
    let jugador = Math.floor(Math.random() * 21) + 1; // Valor entre 1 y 21
    let banca = Math.floor(Math.random() * 21) + 1;

    // En el blackjack, si tengo un puntaje entre 1, y 11, estoy en la zona segura, porque si pido una carta mas
    // es imposible pasarme de 21, entonces, si el jugador/banca tienen menos de 11, van a pedir otra carta.
    while (jugador <= 11) {
      jugador += Math.floor(Math.random() * 10) + 1; // Sumo un valor entre 1 y 10
    }

    while (banca <= 11) {
      banca += Math.floor(Math.random() * 10) + 1; // Sumo otro valor entre 1 y 10
    }

    // Ahora evaluo los resultados para determinar quien gano
    if (jugador > 21) {
      // Si el jugador se pasa de 21, pierde automaticamente
      return `Tu puntaje (${jugador}) excede 21. ¡Perdés!`;
    } else if (banca > 21 || jugador > banca) {
      // Si la banca se pasa de 21 o el jugador tiene más puntos, gana el jugador
      return `Tu puntaje: ${jugador}, Banca: ${banca}. ¡Ganaste!`;
    } else if (jugador === banca) {
      // Si tienen igual puntaje, es un empate
      return `Tu puntaje: ${jugador}, Banca: ${banca}. ¡Empate!`;
    } else {
      // En cualquier otro caso, gana la banca
      return `Tu puntaje: ${jugador}, Banca: ${banca}. ¡Perdés!`;
    }
  }
}
