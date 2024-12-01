import readline from "readline"; // Importo readline para interactuar con el usuario por consola
import { TragamonedasClasico } from "./back/juegos/TragamonedasClasico";
import { TragamonedasTematico } from "./back/juegos/TragamonedasTematico";
import { Ruleta } from "./back/juegos/Ruleta";
import { Blackjack } from "./back/juegos/Blackjack";

// Creo la interfaz para manejar entradas y salidas en consola
const rl = readline.createInterface({
  input: process.stdin, // Entrada estándar (teclado)
  output: process.stdout, // Salida estándar (consola)
});

// Instancio los juegos disponibles en el casino
const tragamonedasClasico = new TragamonedasClasico();
const tragamonedasTematico = new TragamonedasTematico();
const ruleta = new Ruleta();
const blackjack = new Blackjack();

// Funcion que arranca el casino, mostrando un mensaje de bienvenida
function iniciarCasino() {
  console.log("🎰 ¡Bienvenido al Casino Virtual! 🎲"); // Mensaje inicial
  elegirJuego(); // Llamo a la funcion que permite elegir un juego
}

// Funcion para mostrar el menu y permitir que el usuario elija un juego
function elegirJuego() {
  console.log("\nElige un juego:");
  console.log("1. Tragamonedas Clásico");
  console.log("2. Tragamonedas Temático");
  console.log("3. Ruleta");
  console.log("4. Blackjack");
  console.log("5. Salir");

  // Pregunto al usuario que quiere jugar
  rl.question("¿Qué juego querés jugar? (1-5): ", (opcion) => {
    // Dependiendo de la opcion elegida, ejecuto un caso diferente
    switch (opcion) {
      case "1":
        jugar(tragamonedasClasico); // Jugar al Tragamonedas Clasico
        break;
      case "2":
        jugar(tragamonedasTematico); // Jugar al Tragamonedas Tematico
        break;
      case "3":
        jugar(ruleta); // Jugar a la Ruleta
        break;
      case "4":
        jugar(blackjack); // Jugar al Blackjack
        break;
      case "5":
        console.log("¡Gracias por jugar! Volvé pronto. 🎲"); // Mensaje de despedida
        rl.close(); // Cierro la interfaz de consola
        break;
      default:
        console.log("Opción inválida. Probá de nuevo."); // Manejo de opcion invalida
        elegirJuego(); // Vuelvo a mostrar el menu
    }
  });
}

// Funcion generica para jugar un juego
function jugar(juego: any) {
  console.log(`\n=== Jugando a: ${juego.getNombre()} ===`); // Muestro el nombre del juego
  console.log(`Instrucciones: ${juego.leerInstrucciones()}`); // Muestro las instrucciones

  // Pregunto cuanto quiere apostar el usuario
  rl.question("¿Cuánto querés apostar? ", (apuesta) => {
    const resultado = juego.jugar(Number(apuesta)); // Llamo al metodo jugar del juego con la apuesta
    console.log(`Resultado: ${resultado}`); // Muestro el resultado (si ganó o perdió)

    // Pregunto si quiere jugar de nuevo o cambiar de juego
    rl.question("\n¿Querés jugar otra vez (1) o elegir otro juego (2)? ", (respuesta) => {
      if (respuesta === "1") {
        jugar(juego); // Vuelve a jugar el mismo juego
      } else if (respuesta === "2") {
        elegirJuego(); // Vuelve al menu principal
      } else {
        console.log("Opción inválida. Volviendo al menú principal."); // Manejo de opcion invalida
        elegirJuego();
      }
    });
  });
}

// Arranco el casino llamando a la funcion principal
iniciarCasino();
