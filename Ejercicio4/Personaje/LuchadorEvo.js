"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LuchadorEvo = void 0;
const Luchador_1 = require("./Luchador");
// Clase evolucion del luchador
class LuchadorEvo extends Luchador_1.Luchador {
    constructor(nombre) {
        super(nombre);
        this.nivel += 5;
        this.puntosDeVida += 60;
        this.ataque += 25;
        this.defensa += 15;
    }
    atacar() {
        console.log(`${this.nombre} ejecuta un combo con su espada.`);
    }
}
exports.LuchadorEvo = LuchadorEvo;
