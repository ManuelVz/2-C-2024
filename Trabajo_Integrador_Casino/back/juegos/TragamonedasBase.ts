import { Juego } from "../abstracts/Juegos";

// Clase abstracta que sirve como base para los juegos de tragamonedas.
export abstract class TragamonedasBase extends Juego {
  // Aca guardo los simbolos que se van a usar en los rodillos
  protected simbolos: string[];

  // Constructor para inicializar el tragamonedas con nombre, apuesta minima y simbolos
  constructor(nombre: string, apuestaMinima: number, simbolos: string[]) {
    super(nombre, apuestaMinima); // Llamo al constructor de la clase base
    this.simbolos = simbolos; // Guardo los simbolos en la propiedad de la clase
  }

  // Este metodo genera los resultados de los rodillos al azar usando los simbolos disponibles
  protected generarResultados(): string[] {
    // Uso un array de longitud 3, donde cada posicion tiene un simbolo elegido al azar
    return Array.from({ length: 3 }, () =>
      this.simbolos[Math.floor(Math.random() * this.simbolos.length)]
    );
  }

  // Metodo abstracto que obliga a las clases hijas a implementar su propia logica del juego
  abstract jugar(apuesta: number): string;
}
