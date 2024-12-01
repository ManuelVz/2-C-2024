"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personaje = void 0;
class Personaje {
    //Defino los atributos basicos de mi personaje
    constructor(nombre, nivel = 1, puntosDeVida = 100, ataque = 10, defensa = 5) {
        this.nombre = nombre;
        this.nivel = nivel;
        this.puntosDeVida = puntosDeVida;
        this.ataque = ataque;
        this.defensa = defensa;
    }
    //Acciones de ataque y defensa
    atacar() {
        console.log(`${this.nombre} está atacando con un poder de ${this.ataque}.`);
    }
    defender() {
        console.log(`${this.nombre} se está defendiendo con una defensa de ${this.defensa}.`);
    }
    //Agregue la funcion para mostrar atributos como un metodo de la clase personaje (en el index.js, quedaba bastante mal)
    //Entonces ahora, puedo "invocarla" como un metodo.
    mostrarAtributos() {
        console.log(`--- Atributos de ${this.nombre} ---`);
        console.log(`Nivel: ${this.nivel}`);
        console.log(`Puntos de Vida: ${this.puntosDeVida}`);
        console.log(`Ataque: ${this.ataque}`);
        console.log(`Defensa: ${this.defensa}`);
        console.log('');
    }
}
exports.Personaje = Personaje;
