const SERVER_URL = "http://localhost:3000"; // Direccion del servidor Express

// Funcion que muestra las opciones para el juego seleccionado
async function mostrarJuego(juego) {
  // Tomo los elementos necesarios del DOM
  const juegoSeleccionado = document.getElementById("juego-seleccionado");
  const opciones = document.getElementById("opciones");
  const jugarBtn = document.getElementById("jugar-btn");
  const resultado = document.getElementById("resultado");
  const instrucciones = document.getElementById("instrucciones");

  // Actualizo el titulo para que muestre que juego se eligio
  juegoSeleccionado.textContent = `Jugando: ${juego.replace("-", " ")}`;
  opciones.innerHTML = ""; // Limpio las opciones anteriores
  jugarBtn.style.display = "block"; // Muestro el boton de jugar
  resultado.textContent = ""; // Limpio el resultado anterior
  instrucciones.textContent = "Cargando instrucciones..."; // Mensaje para avisar que las instrucciones se estan cargando

  // Trato de obtener las instrucciones del juego desde el servidor
  try {
    const response = await fetch(`${SERVER_URL}/instrucciones/${juego}`);
    const data = await response.json();
    instrucciones.textContent = data.instrucciones; // Muestro las instrucciones que vienen del servidor
  } catch (error) {
    // Si algo falla, muestro un mensaje de error y las paso por consola
    instrucciones.textContent = "Error al cargar las instrucciones.";
    console.error(error);
  }

  // Ahora configuro las opciones segun el juego que se eligio
  if (juego === "ruleta") {
    // Si es ruleta, agrego inputs para la apuesta y el numero elegido
    opciones.innerHTML = `
      <label>Apuesta: <input type="number" id="apuesta" min="10" required></label>
      <label>Numero (0-36): <input type="number" id="numeroElegido" min="0" max="36" required></label>
    `;
  } else {
    // Si no, solo agrego el input para la apuesta
    opciones.innerHTML = `
      <label>Apuesta: <input type="number" id="apuesta" min="10" required></label>
    `;
  }

  // Le asigno la funcion `jugar` al click del boton
  jugarBtn.onclick = () => jugar(juego);
}

// Esta funcion llama al servidor para jugar al juego seleccionado
async function jugar(juego) {
  // Tomo los valores de los inputs
  const apuesta = document.getElementById("apuesta").value;
  const numeroElegido = document.getElementById("numeroElegido")?.value; // El `?` es por si no existe este input, porque solo es necesario para la ruleta
  const resultado = document.getElementById("resultado");

  // Creo los parametros para la URL
  const params = new URLSearchParams({ apuesta }); // Arranco con la apuesta
  if (numeroElegido) params.append("numeroElegido", numeroElegido); // Si se eligio un numero, lo agrego

  // Trato de mandar la request al servidor
  try {
    const response = await fetch(`${SERVER_URL}/jugar/${juego}?${params.toString()}`);
    const data = await response.json();
    resultado.textContent = data.resultado; // Muestro el resultado del juego
  } catch (error) {
    // Si algo falla, muestro un mensaje de error y lo paso por consola
    resultado.textContent = "Error al conectar con el servidor.";
    console.error(error);
  }
}
