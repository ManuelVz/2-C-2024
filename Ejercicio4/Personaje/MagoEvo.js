"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MagoEvo = void 0;
// src/Personaje/MagoEvo.ts
const Mago_1 = require("./Mago");
class MagoEvo extends Mago_1.Mago {
    constructor(nombre) {
        super(nombre); //Heredo los atributos del mago (antes de evolucionar)
        // Cuando lo hago evolucionar, utilizo el constructor para aumentar el nivel, y las estadisticas base
        this.nivel += 5;
        this.puntosDeVida += 50;
        this.ataque += 20;
        this.defensa += 10;
    }
    //Cuando evoluciona, cambia el ataque basico
    atacar() {
        console.log(`${this.nombre} invoca una tormenta electrica.`);
    }
}
exports.MagoEvo = MagoEvo;
