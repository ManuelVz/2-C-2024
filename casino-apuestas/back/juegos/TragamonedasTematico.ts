import { TragamonedasBase } from "./TragamonedasBase";

// Clase para un tragamonedas con tematica
export class TragamonedasTematico extends TragamonedasBase {
  // Aca guardo la tematica del tragamonedas
  private tematica: string;

  constructor() {
    // Paso al constructor de la clase base el nombre, apuesta minima y simbolos tematicos
    super("Tragamonedas Tematico", 20, ["🍒", "💎", "🍋", "🍊", "🍉"]);
    this.tematica = "Frutas y Joyas"; // Defino la tematica
  }

  // Metodo para obtener la tematica del juego
  public getTematica(): string {
    return this.tematica; // Devuelvo la tematica que guarde en el constructor
  }

  // Metodo que define la logica del tragamonedas tematico
  jugar(apuesta: number): string {
    // Valido que la apuesta cumpla con la minima requerida
    if (!this.validarApuesta(apuesta)) {
      return `La apuesta minima para este juego es ${this.apuestaMinima}.`;
    }

    // Obtengo los resultados de los rodillos
    const resultados = this.generarResultados();
    const [a, b, c] = resultados; // Desarmo el array para analizar cada simbolo

    // Si salen tres diamantes, el jugador gana el jackpot
    if (a === "💎" && b === "💎" && c === "💎") {
      return `¡Jackpot! Tres 💎💎💎. Ganaste ${apuesta * 50}.`;
    }

    // Si los tres símbolos coinciden pero no son diamantes, el jugador gana x5
    if (a === b && b === c && a !== "💎") {
      return `¡Felicidades! Tres ${a} iguales. Ganaste ${apuesta * 10}.`;
    }

    // Si no, el jugador pierde
    return `Salió ${resultados.join(" ")}. Perdiste ${apuesta}.`;
  }
}
