import * as fs from "fs"; //Para leer los archivos
import { Jugable } from "../interfaces/Jugable"; 

// Clase abstracta base para todos los juegos del casino
export abstract class Juego implements Jugable { //Estoy implementando la interface "Jugable", esto va a obligar a la clase Juegos a usar el metodo jugar
  // Atributo privado para nombre y publico para la apuesta minima
  public nombre: string;
  protected apuestaMinima: number;

  // Constructor: inicializo el juego con un nombre y una apuesta minima
  constructor(nombre: string, apuestaMinima: number) {
    this.nombre = nombre; // El nombre del juego (voy a usar ruleta, blackjack, y tragamonedas)
    this.apuestaMinima = apuestaMinima; // Cuanto es lo minimo que se puede apostar en este juego
  }

  // Metodo para obtener el nombre del juego (publico porque quiero que cualquier clase lo pueda usar)
  public getNombre(): string {
    return this.nombre; // Devuelvo el nombre del juego
  }

  // Metodo abstracto: las clases hijas lo tienen que implementar si o si
  abstract jugar(apuesta: number, numeroElegido?: number): string;

  // Metodo para validar si la apuesta cumple con el minimo
  protected validarApuesta(apuesta: number): boolean {
    // Devuelve true si la apuesta es mayor o igual al minimo
    return apuesta >= this.apuestaMinima;
  }

  // Metodo para leer las instrucciones desde un archivo
  public leerInstrucciones(): string {
    try {
      // Intento leer el archivo 'instrucciones.txt' como texto
      const instrucciones = fs.readFileSync("back/juegos/instrucciones.txt", "utf8");

      // Divido el texto en lineas y busco la que corresponde al nombre del juego actual
      const lineas = instrucciones.split("\n");
      const instruccion = lineas.find((linea) => linea.startsWith(this.nombre));

      // Si encuentro una linea que empieza con el nombre del juego, la devuelvo
      return instruccion ? instruccion.split(":")[1].trim() : "Instrucciones no disponibles.";
    } catch (error) {
      // Si falla, devuelvo un mensaje de error
      return "Error al leer las instrucciones.";
    }
  }
}
