// Interfaz que define lo basico para un juego que se pueda jugar.
export interface Jugable {
  // Cada juego tiene que tener un metodo jugar que recibe una apuesta, y opcionalmente, un numero (esto lo tuve que agregar para la ruleta)
  jugar(apuesta: number, numeroElegido?: number): string;
}
