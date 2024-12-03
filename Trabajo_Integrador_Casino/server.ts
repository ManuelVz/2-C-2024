import express from "express"; // Importo express para manejar las rutas del servidor.
import path from "path"; // Path para trabajar con rutas de archivos.
import cors from "cors"; 
import { TragamonedasClasico } from "./back/juegos/TragamonedasClasico";
import { TragamonedasTematico } from "./back/juegos/TragamonedasTematico";
import { Ruleta } from "./back/juegos/Ruleta";
import { Blackjack } from "./back/juegos/Blackjack";
import { Casino } from "./back/admin/Casino"; // Importo la clase Casino que administra los juegos.
import bodyParser from "body-parser"; // Body-parser para interpretar el contenido JSON de las solicitudes 

const app = express(); // Creo la app de express.
app.use(cors()); // Habilito CORS para manejar el acceso entre dominios.
const port = 3000; // Defino el puerto donde va a correr el servidor.

const casino = new Casino(); // Creo una instancia del casino que administrara los juegos.

// Cualquier archivo dentro de la carpeta front se podra servir directamente al cliente, y la ruta se construira automaticamente
app.use(express.static(path.join(__dirname, "front")));

// Endpoint para obtener todos los juegos disponibles
app.get("/juegos", (req, res) => {
  const juegos = casino.obtenerJuegos(); // Obtengo todos los juegos disponibles.
  res.json({ juegos }); // Devuelvo la lista de juegos como JSON.
});

// Endpoint para jugar un juego especifico
app.get("/jugar/:juego", (req, res) => {
  const { juego } = req.params; // Obtengo el juego desde los parametros de la URL.
  const { apuesta, numeroElegido } = req.query; // Obtengo la apuesta y otros datos desde la query string.

  const juegoSeleccionado = casino.obtenerJuego(juego); // Busco el juego en la instancia del casino.

  // Si no lo encuentro, devuelvo un mensaje de error.
  if (!juegoSeleccionado) {
    return res.json({ resultado: "Juego no encontrado." });
  }

  // Dependiendo del tipo de juego, calculo el resultado.
  let resultado: string;
  if (juego === "tragamonedas-clasico" || juego === "tragamonedas-tematico") {
    resultado = juegoSeleccionado.jugar(Number(apuesta));
  } else if (juego === "ruleta") {
    resultado = juegoSeleccionado.jugar(Number(apuesta), Number(numeroElegido));
  } else if (juego === "blackjack") {
    resultado = juegoSeleccionado.jugar(Number(apuesta));
  }

  res.json({ resultado }); // Devuelvo el resultado como JSON.
});

// Endpoint para obtener las instrucciones de un juego
app.get("/instrucciones/:juego", (req, res) => {
  const { juego } = req.params; // Obtengo el nombre del juego desde los parametros.
  const juegoSeleccionado = casino.obtenerJuego(juego); // Busco el juego en el casino.

  // Si no lo encuentro, devuelvo un mensaje de error.
  if (!juegoSeleccionado) {
    return res.json({ instrucciones: "Juego no encontrado." });
  }

  // Leo las instrucciones del juego y las envio.
  const instrucciones = juegoSeleccionado.leerInstrucciones();
  res.json({ instrucciones });
});

app.use(express.json()); // Lo utilizo para parsear el JSON de las solicitudes (esto es para poder acceder desde req.body, si no, express no lo procesa)

// Endpoint para agregar un juego
app.post("/juegos", (req, res) => {
  const { nombre, tipo } = req.body;

  // Me fijo si el usuario mando los datos correctos.
  if (!nombre || !tipo) {
    return res.status(400).json({ mensaje: "Nombre y tipo son requeridos." });
  }

  // Si ya existe un juego con ese nombre, aviso que lo voy a reemplazar.
  if (casino.obtenerJuego(nombre)) {
    console.log(`El juego con nombre ${nombre} ya existia. Sera reemplazado.`);
  }

  // Aca, segun el tipo creo el juego correspondiente.
  let nuevoJuego;
  switch (tipo) {
    case "tragamonedas-clasico":
      nuevoJuego = new TragamonedasClasico();
      break;
    case "tragamonedas-tematico":
      nuevoJuego = new TragamonedasTematico();
      break;
    case "ruleta":
      nuevoJuego = new Ruleta();
      break;
    case "blackjack":
      nuevoJuego = new Blackjack();
      break;
    default:
      return res.status(400).json({ mensaje: "Tipo de juego no valido." });
  }

  // Una vez creado el juego, lo agrego al casino.
  casino.agregarJuego(nombre, nuevoJuego);
  res.json({ mensaje: `Juego ${nombre} agregado con exito.` });
});

// Endpoint para eliminar un juego
app.delete("/juegos/:nombre", (req, res) => {
  const { nombre } = req.params;

  // Si el juego no existe, muestro un mensaje de error.
  if (!casino.obtenerJuego(nombre)) {
    return res.status(404).json({ mensaje: `Juego ${nombre} no encontrado.` });
  }

  // Lo elimino y confirmo al usuario que se borro correctamente.
  casino.eliminarJuego(nombre);
  res.json({ mensaje: `Juego ${nombre} eliminado con exito.` });
});

// Inicio el servidor en el puerto definido.
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});

