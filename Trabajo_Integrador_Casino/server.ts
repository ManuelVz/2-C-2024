import express from "express"; // Importo express para manejar las rutas del servidor.
import path from "path"; // Path para trabajar con rutas de archivos
import { TragamonedasClasico } from "./back/juegos/TragamonedasClasico";
import { TragamonedasTematico } from "./back/juegos/TragamonedasTematico";
import { Ruleta } from "./back/juegos/Ruleta";
import { Blackjack } from "./back/juegos/Blackjack";
import cors from "cors"; // Cors para manejar el acceso entre dominios

const app = express(); // Creo la app de express
app.use(cors()); // Habilito CORS para evitar problemas al correr el HTML
const port = 3000; // Defino el puerto donde va a correr el servidor

// Instancio los juegos del casino
const tragamonedasClasico = new TragamonedasClasico();
const tragamonedasTematico = new TragamonedasTematico();
const ruleta = new Ruleta();
const blackjack = new Blackjack();

// Cualquier archivo dentro de la carpeta front se podra servir directamente al cliente, y la ruta se construira automaticamente
app.use(express.static(path.join(__dirname, "front")));

// Endpoint para jugar un juego especifico
app.get("/jugar/:juego", (req, res) => {
  const { juego } = req.params; // Obtengo el juego desde los parametros de la URL
  const { apuesta, numeroElegido } = req.query; // Obtengo la apuesta y otros datos desde la query string

  let resultado: string; // Variable para guardar el resultado
  switch (juego) {
    case "tragamonedas-clasico":
      resultado = tragamonedasClasico.jugar(Number(apuesta)); // Juega al tragamonedas clasico
      break;
    case "tragamonedas-tematico":
      resultado = tragamonedasTematico.jugar(Number(apuesta)); // Juega al tragamonedas tematico
      break;
    case "ruleta":
      resultado = ruleta.jugar(Number(apuesta), Number(numeroElegido)); // Juega a la ruleta
      break;
    case "blackjack":
      resultado = blackjack.jugar(Number(apuesta)); // Juega al blackjack
      break;
    default:
      resultado = "Juego no encontrado."; // Manejo de opcion invalida
  }

  res.json({ resultado }); // Devuelvo el resultado como JSON
});

// Endpoint para obtener las instrucciones de un juego
app.get("/instrucciones/:juego", (req, res) => {
  const { juego } = req.params; // Obtengo el juego desde los parametros

  let instrucciones: string; // Variable para guardar las instrucciones
  switch (juego) {
    case "tragamonedas-clasico":
      instrucciones = tragamonedasClasico.leerInstrucciones(); // Instrucciones del tragamonedas clasico
      break;
    case "tragamonedas-tematico":
      instrucciones = tragamonedasTematico.leerInstrucciones(); // Instrucciones del tragamonedas tematico
      break;
    case "ruleta":
      instrucciones = ruleta.leerInstrucciones(); // Instrucciones de la ruleta
      break;
    case "blackjack":
      instrucciones = blackjack.leerInstrucciones(); // Instrucciones del blackjack
      break;
    default:
      instrucciones = "Juego no encontrado."; // Manejo de opcion invalida
  }

  res.json({ instrucciones }); // Devuelvo las instrucciones como JSON
});

// Inicio el servidor en el puerto definido
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); // Mensaje de confirmacion
});
