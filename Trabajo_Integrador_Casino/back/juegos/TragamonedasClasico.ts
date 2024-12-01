import { TragamonedasBase } from "./TragamonedasBase";

// Clase para un tragamonedas clasico
export class TragamonedasClasico extends TragamonedasBase {
  constructor() {
    // Llamo al constructor de la clase base con el nombre, apuesta minima y los simbolos clasicos
    super("Tragamonedas Clasico", 10, ["🍒", "🔔", "💎", "7️⃣", "🍋"]); //Iconos recuperados de: https://getemoji.com/
  }

  // Metodo que define la logica para jugar al tragamonedas clasico
  jugar(apuesta: number): string {
    // Primero verifico si la apuesta cumple con la minima requerida
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta minima para este juego es ${this.apuestaMinima}.`;
    }

    // Obtengo los resultados de los rodillos
    const resultados = this.generarResultados();
    const [a, b, c] = resultados; // Desarmo el array para trabajar con cada simbolo

    // Si los tres simbolos son iguales, el jugador gana
    if (a === b && b === c) {
      return `¡Ganaste con ${resultados.join(" ")}! Te llevaste ${apuesta * 10}.`;
    }

    // Si no, el jugador pierde
    return `Salio ${resultados.join(" ")}. Perdiste ${apuesta}.`;
  }
}
