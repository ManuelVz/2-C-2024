"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Arquero = void 0;
const Personaje_1 = require("./Personaje");
class Arquero extends Personaje_1.Personaje {
    constructor(nombre) {
        super(nombre, 1, 90, 8, 8);
    }
    atacar() {
        console.log(`${this.nombre} dispara una flecha.`);
    }
    defender() {
        console.log(`${this.nombre} utiliza buff de defensa.`);
    }
}
exports.Arquero = Arquero;
