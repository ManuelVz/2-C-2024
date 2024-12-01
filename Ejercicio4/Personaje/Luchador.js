"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Luchador = void 0;
const Personaje_1 = require("./Personaje");
class Luchador extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre, 1, 120, 5, 12);
    }
    atacar() {
        console.log(`${this.nombre} golpea con su espada.`);
    }
    defender() {
        console.log(`${this.nombre} se cubre con su escudo.`);
    }
}
exports.Luchador = Luchador;
