import { TragamonedasClasico } from "../juegos/TragamonedasClasico";
import { TragamonedasTematico } from "../juegos/TragamonedasTematico";
import { Ruleta } from "../juegos/Ruleta";
import { Blackjack } from "../juegos/Blackjack";


// Clase Casino, la voy a utilizar para administrar los juegos
export class Casino {
  private juegos: { [key: string]: any } = {};

  constructor() {
    // Inicializo los juegos disponibles en el casino
    this.agregarJuego("tragamonedas-clasico", new TragamonedasClasico());
    this.agregarJuego("tragamonedas-tematico", new TragamonedasTematico());
    this.agregarJuego("ruleta", new Ruleta());
    this.agregarJuego("blackjack", new Blackjack());
  }

  // Metodo para agregar un juego al casino
  agregarJuego(nombre: string, juego: any) {
    if (this.juegos[nombre]) {
        console.log(`Sobrescribiendo el juego existente: ${nombre}`);
    }
    this.juegos[nombre] = juego;
}


  // Metodo para eliminar un juego del casino
  eliminarJuego(nombre: string) {
    delete this.juegos[nombre];
  }

  //Estos metodos los voy a definir para utilizarlos en index.ts, y server.ts; por ejemplo, a la hora de jugar, obtener instrucciones, una lista de los juegos, etc...

  // Metodo para obtener un juego por su nombre
  obtenerJuego(nombre: string) {
    return this.juegos[nombre];
  }
  // Metodo para obtener todos los juegos disponibles
  obtenerJuegos() {
    return Object.keys(this.juegos);
  }
}
