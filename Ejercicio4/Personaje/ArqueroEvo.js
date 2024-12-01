"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArqueroEvo = void 0;
const Arquero_1 = require("./Arquero");
// Clase evolucion del arquero
class ArqueroEvo extends Arquero_1.Arquero {
    constructor(nombre) {
        super(nombre);
        this.nivel += 5;
        this.puntosDeVida += 40;
        this.ataque += 30;
        this.defensa += 12;
    }
    atacar() {
        console.log(`${this.nombre} dispara 3 flechas.`);
    }
}
exports.ArqueroEvo = ArqueroEvo;
