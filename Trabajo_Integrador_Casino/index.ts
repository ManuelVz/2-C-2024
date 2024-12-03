import readline from "readline"; // Para interactuar con el usuario por consola
import { TragamonedasClasico } from "./back/juegos/TragamonedasClasico";
import { TragamonedasTematico } from "./back/juegos/TragamonedasTematico";
import { Ruleta } from "./back/juegos/Ruleta";
import { Blackjack } from "./back/juegos/Blackjack";
import { Casino } from "./back/admin/Casino"; // Importo la clase Casino (lo agregue despues de la correccion de Rocio)

// Creo la interfaz para entrada y salida en consola
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Instancia del casino que contiene los juegos (ahora, Casino esta compuesta por los juegos)
const casino = new Casino();

// Funcion principal para iniciar el casino
function iniciarCasino() {
  console.log("🎰 ¡Bienvenido al Casino Virtual! 🎲");
  mostrarMenuPrincipal(); // Muestra el menu principal
}

// Menu principal del casino
function mostrarMenuPrincipal() {
  console.log("\nMenu Principal:");
  console.log("1. Jugar");
  console.log("2. Panel de Administracion");
  console.log("3. Salir");

  //Modifique esta parte, para agregar el panel de administracion
  rl.question("Elige una opcion (1-3): ", (opcion) => {
    switch (opcion) {
      case "1":
        menuJuegos(); // Navega al menu de juegos
        break;
      case "2":
        menuAdministracion(); // Navega al panel de administracion
        break;
      case "3":
        console.log("¡Gracias por visitar el casino! 🎲");
        rl.close(); // Cierra la interfaz de consola
        break;
      default:
        console.log("Opcion invalida. Intenta de nuevo.");
        mostrarMenuPrincipal(); // Si la opcion no es valida, vuelve al menu principal
    }
  });
}

// Menu de seleccion de juegos
function menuJuegos() {
  const juegos = casino.obtenerJuegos(); // Obtengo todos los juegos del casino (ahora se obtienen de la clase Casino)
  if (juegos.length === 0) {
    console.log("No hay juegos disponibles en el casino.");
    return mostrarMenuPrincipal(); // Si no hay juegos, vuelvo al menu principal
  }

  console.log("\nJuegos Disponibles:");
  juegos.forEach((juego, index) => {
    console.log(`${index + 1}. ${juego.replace("-", " ")}`); // Muestro los juegos disponibles
  });
  console.log(`${juegos.length + 1}. Volver al menu principal`);

  rl.question("Elige un juego para jugar: ", (opcion) => {
    const indice = Number(opcion) - 1; // Convierto la opcion a un indice numerico

    if (indice >= 0 && indice < juegos.length) {
      jugar(casino.obtenerJuego(juegos[indice])); // Si es una opcion valida, se juega el juego seleccionado
    } else if (indice === juegos.length) {
      mostrarMenuPrincipal(); // Si elige volver al menu principal, lo llevo ahi
    } else {
      console.log("Opcion invalida.");
      menuJuegos(); // Si la opcion es invalida, vuelvo a mostrar el menu de juegos
    }
  });
}

// Funcion generica para jugar un juego
function jugar(juego: any) {
  console.log(`\n=== Jugando a: ${juego.constructor.name} ===`); // Muestro el nombre del juego
  console.log(`Instrucciones: ${juego.leerInstrucciones()}`); // Muestro las instrucciones del juego

  rl.question("¿Cuanto queres apostar? ", (apuesta) => {
    const resultado = juego.jugar(Number(apuesta)); // Llamo al metodo jugar del juego con la apuesta
    console.log(`Resultado: ${resultado}`); // Muestro el resultado (si gano o perdio)

    rl.question("\n¿Queres jugar otra vez (1) o volver al menu de juegos (2)? ", (respuesta) => {
      if (respuesta === "1") {
        jugar(juego); // Vuelve a jugar el mismo juego
      } else {
        menuJuegos(); // Vuelve al menu de juegos
      }
    });
  });
}

// Menu de administracion
function menuAdministracion() {
  console.log("\nPanel de Administracion:");
  console.log("1. Agregar un juego");
  console.log("2. Eliminar un juego");
  console.log("3. Volver al menu principal");

  rl.question("Elige una opcion (1-3): ", (opcion) => {
    switch (opcion) {
      case "1":
        agregarJuego(); // Si elijo agregar juego, invoca la funcion para agregar juegos (defino un juego, y se lo paso a Casino, con el metodo agregarJuego )
        break;
      case "2":
        eliminarJuego(); // Si elijo eliminar juego, invoca la funcion para eliminar juegos (defino un juego, y se lo paso a Casino, con el metodo eliminarJuego)
        break;
      case "3":
        mostrarMenuPrincipal(); // Si elijo volver, va al menu principal
        break;
      default:
        console.log("Opcion invalida.");
        menuAdministracion(); // Si la opcion no es valida, vuelve al panel de administracion
    }
  });
}

// Agregar un juego al casino
function agregarJuego() {
  rl.question("Ingrese el nombre del juego (tragamonedas-clasico, tragamonedas-tematico, ruleta, blackjack): ", (nombre) => {
    const tipo = nombre; // agregarJuego (de la clase Casino), necesita tipo, y nombre; para no tener que escribirlo dos veces, tipo y nombre van a ser iguales

    let nuevoJuego;
    switch (tipo) {
      case "tragamonedas-clasico":
        nuevoJuego = new TragamonedasClasico(); // Creo el juego tragamonedas clasico
        break;
      case "tragamonedas-tematico":
        nuevoJuego = new TragamonedasTematico(); // Creo el juego tragamonedas tematico
        break;
      case "ruleta":
        nuevoJuego = new Ruleta(); // Creo el juego ruleta
        break;
      case "blackjack":
        nuevoJuego = new Blackjack(); // Creo el juego blackjack
        break;
      default:
        console.log("Tipo de juego no valido.");
        return menuAdministracion(); // Si el tipo no es valido, vuelvo al panel de administracion
    }

    casino.agregarJuego(nombre, nuevoJuego); // Agrego el nuevo juego al casino
    console.log(`Juego '${nombre}' agregado con exito.`);
    menuAdministracion(); // Vuelvo al panel de administracion
  });
}

// Eliminar un juego del casino
function eliminarJuego() {
  const juegos = casino.obtenerJuegos(); // Obtengo los juegos disponibles
  if (juegos.length === 0) {
    console.log("No hay juegos disponibles para eliminar.");
    return menuAdministracion(); // Si no hay juegos, vuelvo al panel de administracion
  }

  console.log("\nJuegos Disponibles para Eliminar:");
  juegos.forEach((juego, index) => {
    console.log(`${index + 1}. ${juego.replace("-", " ")}`); // Muestro los juegos disponibles para eliminar
  });

  rl.question("Elige el numero del juego que deseas eliminar: ", (opcion) => {
    const indice = Number(opcion) - 1; // Convierto la opcion a un indice numerico

    if (indice >= 0 && indice < juegos.length) {
      const nombre = juegos[indice]; // Obtengo el nombre del juego a eliminar
      casino.eliminarJuego(nombre); // Elimino el juego del casino
      console.log(`Juego '${nombre}' eliminado con exito.`);
    } else {
      console.log("Opcion invalida.");
    }
    menuAdministracion(); // Despues de eliminar o si la opcion es invalida, vuelvo al panel de administracion
  });
}


// Inicia el casino
iniciarCasino(); // Arranco el casino
