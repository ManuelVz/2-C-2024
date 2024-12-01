"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mago = void 0;
const Personaje_1 = require("./Personaje");
class Mago extends Personaje_1.Personaje {
    constructor(nombre) {
        //Valores iniciales para el mago (nivel, pdv, ataque, y defensa), de paso, me va a servidor para la evo.
        //Para estos puntos segui un criterio; el mago tiene mas ataque, y menos defensa; el luchador mas defensa, y menos ataque; y el arquero un punto medio entre ambos.
        super(nombre, 1, 80, 15, 3);
    }
    atacar() {
        console.log(`${this.nombre} lanza un hechizo de fuego.`);
    }
    defender() {
        console.log(`${this.nombre} usa un escudo magico.`);
    }
}
exports.Mago = Mago;
